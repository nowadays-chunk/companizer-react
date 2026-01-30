import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  CircularProgress,
  Backdrop,
  FormControlLabel,
  Switch,
} from '@mui/material';

import FilterManager from './FilterManager';
import BaseTableToolbar from './BaseTableToolbar';
import BaseTable from './BaseTable.js';
import { keyToLinkMap } from '../../../layout/keyToLinkMap';
import { faker } from '@faker-js/faker';

const getRandomElementId = (options) => {
  if (!options || options.length === 0) return null;
  return options[Math.floor(Math.random() * options.length)].id;
};

const getMultipleRandomElementIds = (options) => {
  if (!options || options.length === 0) return [];
  const selectedOptions = [];
  const maxSelections = Math.min(3, options.length); // no more than 3 and not more than available options
  const numSelections = Math.floor(Math.random() * maxSelections) + 1; // 1..maxSelections

  while (selectedOptions.length < numSelections) {
    const option = getRandomElementId(options);
    if (!selectedOptions.includes(option)) {
      selectedOptions.push(option);
    }
  }

  return selectedOptions;
};

// ----- generic numeric helper obeying min / max / decimals -----
const getRandomNumberInRange = (min = 0, max = 1000, decimals = 0) => {
  const rand = Math.random() * (max - min) + min;
  if (decimals > 0) {
    return Number(rand.toFixed(decimals));
  }
  return Math.round(rand);
};

// ----- UPDATED: date helper returning MySQL DATETIME string -----
const getRandomDateISO = (mode = 'past') => {
  const now = new Date();
  const threeYears = 1000 * 60 * 60 * 24 * 365 * 3;
  let ts;

  if (mode === 'future') {
    ts = now.getTime() + Math.random() * threeYears;
  } else if (mode === 'past') {
    ts = now.getTime() - Math.random() * threeYears;
  } else {
    ts = now.getTime() - threeYears / 2 + Math.random() * threeYears;
  }

  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, '0');

  // MySQL DATETIME(6) accepts this format just fine
  return (
    `${d.getFullYear()}-` +
    `${pad(d.getMonth() + 1)}-` +
    `${pad(d.getDate())} ` +
    `${pad(d.getHours())}:` +
    `${pad(d.getMinutes())}:` +
    `${pad(d.getSeconds())}`
  );
};

export default function BaseTableComponent({
  fetchItems,
  addItem,
  updateItem,
  deleteItem,
  fieldConfig,
  entityName,
  onViewItem: onViewItemProp,
  onEditItem: onEditItemProp
}) {
  const [refreshedFieldsConfig, setRefreshedFieldsConfig] = useState(fieldConfig);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(Object.keys(fieldConfig)[0]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRefreshedFieldsConfig(fieldConfig);
  }, [fieldConfig]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };

    fetchData();
    setSelected([]);
  }, [fetchItems]);

  useEffect(() => {
    let filteredData = items;

    filters.forEach((filter) => {
      if (filter.active && filter.column && filter.value) {
        filteredData = filteredData.filter((item) =>
          item[filter.column]?.toString().toLowerCase().includes(filter.value.toLowerCase())
        );
      }
    });

    setFilteredItems(filteredData);
  }, [filters, items]);

  const getBaseSlashedURL = () => {
    return keyToLinkMap[entityName.toLowerCase().replace(/ /g, '-').replace(/_/g, '-')];
  };

  const openTabsForSelected = (mode) => {
    const baseSlashedURL = getBaseSlashedURL();
    if (!baseSlashedURL || selected.length === 0) return;

    selected.forEach((id) => {
      const url = `/#${baseSlashedURL}/${mode}/${id}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  };

  // CREATE -> open single "create" page (no need for selection)
  const handleAddItem = () => {
    const baseSlashedURL = getBaseSlashedURL();
    if (!baseSlashedURL) return;

    const url = `/#${baseSlashedURL}/create`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // EDIT -> open edit tab for each selected item
  const handleEditItem = () => {
    if (selected.length === 0) return;
    if (onEditItemProp) {
      selected.forEach(id => onEditItemProp(id));
      return;
    }
    openTabsForSelected('edit');
  };

  // VIEW -> open view tab for each selected item
  const handleViewItem = () => {
    if (selected.length === 0) return;
    if (onViewItemProp) {
      selected.forEach(id => onViewItemProp(id));
      return;
    }
    openTabsForSelected('view');
  };

  const handleDeleteItems = async () => {
    if (!selected.length) return;

    if (window.confirm('Are you sure you want to delete the selected items?')) {
      setLoading(true);
      for (const id of selected) {
        await deleteItem(id);
      }
      setSelected([]);
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    }
  };

  // Generate a random row using fieldConfig rules, then save via addItem
  const generateRandomRow = async () => {
    try {
      const newRow = Object.entries(refreshedFieldsConfig).reduce(
        (acc, [key, field]) => {
          let value;

          // 1) SELECT fields (single & multiple)
          if (field.type === 'select') {
            if (field.multiple) {
              value = getMultipleRandomElementIds(field.options);
            } else {
              value = getRandomElementId(field.options);
            }
          }
          // 2) DATE fields -> MySQL DATETIME string (past or future)
          else if (field.type === 'date') {
            if (field.faker === 'date.future') {
              value = getRandomDateISO('future');
            } else if (field.faker === 'date.past') {
              value = getRandomDateISO('past');
            } else {
              // generic date
              value = getRandomDateISO();
            }
          }
          // 3) NUMBER fields -> use min / max / decimals from fieldConfig
          else if (field.type === 'number') {
            const min = field.min ?? 0;
            const max = field.max ?? 1000;
            const decimals = field.decimals ?? 0;
            value = getRandomNumberInRange(min, max, decimals);
          }
          // 4) SPECIAL case: date.month (even if type is "text")
          else if (field.faker === 'date.month') {
            const monthIndex = Math.floor(Math.random() * 12); // 0..11
            const month = new Date(0, monthIndex).toLocaleString('default', {
              month: 'long',
            });
            value = month.charAt(0).toUpperCase() + month.slice(1);
          }
          // 5) Generic faker for text/etc
          else if (field.faker) {
            try {
              const fakerFnOrVal = field.faker
                .split('.')
                .reduce((accObj, method) => accObj?.[method], faker);

              value =
                typeof fakerFnOrVal === 'function'
                  ? fakerFnOrVal()
                  : fakerFnOrVal ?? faker.lorem.word();
            } catch (e) {
              // fallback if faker path is wrong
              value = faker.lorem.word();
            }
          } else {
            // 6) Fallbacks when nothing else is defined
            if (field.type === 'number') {
              const min = field.min ?? 0;
              const max = field.max ?? 1000;
              const decimals = field.decimals ?? 0;
              value = getRandomNumberInRange(min, max, decimals);
            } else if (field.type === 'date') {
              value = getRandomDateISO();
            } else {
              value = faker.lorem.word();
            }
          }

          acc[key] = value;
          return acc;
        },
        {}
      );

      console.log('New row : ', newRow);
      await addItem(newRow);
      const data = await fetchItems();
      setItems(data);
    } catch (error) {
      console.error(`Error generating and saving random ${entityName}:`, error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 3, paddingBottom: 7 }}>
      <Box sx={{ maxWidth: '100%', position: 'relative' }}>
        <FilterManager
          filters={filters}
          setFilters={setFilters}
          fieldConfig={fieldConfig}
        />
        <Paper sx={{ width: '100%', mb: 2 }}>
          <BaseTableToolbar
            numSelected={selected.length}
            onAdd={handleAddItem}
            onDelete={handleDeleteItems}
            onEdit={handleEditItem}
            onGenerateRandomRow={generateRandomRow}
            onViewItem={handleViewItem}
            entityName={entityName}
          />

          <BaseTable
            items={filteredItems}
            order={order}
            setOrder={setOrder}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            selected={selected}
            setSelected={setSelected}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            dense={dense}
            setDense={setDense}
            fieldConfig={fieldConfig}
          />
        </Paper>
        <FormControlLabel
          control={
            <Switch checked={dense} onChange={() => setDense(!dense)} />
          }
          label="Dense padding"
        />
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Container>
  );
}
