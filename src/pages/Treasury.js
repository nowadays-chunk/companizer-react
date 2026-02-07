import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, CircularProgress, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Button } from '@mui/material';
import { getConfig } from '../components/Management/configRegistry';
import { helpersWrapper } from '../utils/clientQueries';
import { defaultAssets as genDefaultAssets, defaultLiabilities as genDefaultLiabilities } from './defaultSummaryConfig';
import TreasuryTotals from '../components/TreasuryTotals';
import { generateRandomDataAsync } from '../utils/dataGenerator';

// Helper to determine if a entity key belongs to Asset or Liability
const getEntityType = (entityKey, assetsConfig, liabilitiesConfig) => {
  if (assetsConfig[entityKey]) return 'Asset';
  if (liabilitiesConfig[entityKey]) return 'Liability';
  return 'Unknown';
};

// Function to fetch and aggregate data based on configuration
const fetchAndAggregateData = async (assetsConfig, liabilitiesConfig) => {
  const aggregated = {};

  const allEntities = [
    ...Object.keys(assetsConfig),
    ...Object.keys(liabilitiesConfig)
  ];

  // Helper to safely parse amounts (handles strings like "$1,000.00")
  const parseAmount = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    // Remove all non-numeric characters except dot and minus
    const cleanStr = String(val).replace(/[^0-9.-]+/g, '');
    const num = parseFloat(cleanStr);
    return isNaN(num) ? 0 : num;
  };

  for (const entityKey of allEntities) {
    const type = getEntityType(entityKey, assetsConfig, liabilitiesConfig);
    if (type === 'Unknown') continue;

    const entityConfig = getConfig(entityKey);
    if (!entityConfig || !entityConfig.collectionName) {
      console.warn(`Configuration missing for ${entityKey}`);
      continue;
    }

    try {
      const api = helpersWrapper(entityConfig.collectionName);
      // Request a high limit to ensure we fetch "all" rows as requested
      const rawData = await api.fetchItems({ limit: 10000 });

      // Determine Date Field
      let dateField = 'created_at';
      const fields = entityConfig.fieldsConfig || {};

      // Determine Amount Field
      let amountField = 'total_price';


      rawData.forEach(record => {
        // Try to find a date field
        let dateVal = record.created_at;

        // Try to find an amount field
        let amountVal = record.total_price;
        const amount = parseAmount(amountVal);

        if (Math.abs(amount) < 0.01) return;

        const recordDate = new Date(dateVal);
        if (isNaN(recordDate.getTime())) return;

        const year = recordDate.getFullYear();
        const month = recordDate.getMonth();

        // Use Entity Key as the "Category" identifier
        const key = `${entityKey}-${year}-${type}`;

        if (!aggregated[key]) {
          aggregated[key] = {
            id: key,
            category: entityKey, // Entity Name
            invoiceType: type, // Asset or Liability
            year: year,
            initialBalance: 0,
            amounts: Array(12).fill(0),
            total: 0
          };
        }

        // Negate Liability amounts for aggregation
        let signedAmount = amount;
        if (type === 'Liability') {
          signedAmount = -amount;
        }

        aggregated[key].amounts[month] += signedAmount;
        aggregated[key].total += signedAmount;

      });

    } catch (err) {
      console.error(`Error fetching data for ${entityKey}`, err);
    }
  }

  // Flatten to rows and Filter out zero-value rows
  return Object.values(aggregated)
    // Show if total is non-zero OR initial balance non-zero OR ANY month has value
    // Show all aggregated rows regardless of value
    .map(row => ({
      id: row.id,
      category: row.category,
      invoiceType: row.invoiceType, // "Asset" or "Liability"
      year: row.year.toString(),
      initialBalance: row.initialBalance,
      January: row.amounts[0],
      February: row.amounts[1],
      March: row.amounts[2],
      April: row.amounts[3],
      May: row.amounts[4],
      June: row.amounts[5],
      July: row.amounts[6],
      August: row.amounts[7],
      September: row.amounts[8],
      October: row.amounts[9],
      November: row.amounts[10],
      December: row.amounts[11],
      total: row.total
    }));
};

const Treasury = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredRows, setFilteredRows] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationMessage, setGenerationMessage] = useState('');
  const [filters, setFilters] = useState({
    years: [],
    invoiceTypes: [],
    categories: [], // Entities
  });

  const applyFilters = React.useCallback(() => {
    const filteredData = rows.filter(row => {
      const matchYear = filters.years.length === 0 || filters.years.includes(row.year);
      const matchInvoiceType = filters.invoiceTypes.length === 0 || filters.invoiceTypes.includes(row.invoiceType);
      const matchCategory = filters.categories.length === 0 || filters.categories.includes(row.category);
      return matchYear && matchInvoiceType && matchCategory;
    });

    setFilteredRows(filteredData);
  }, [rows, filters]);

  const loadData = React.useCallback(async () => {
    setLoading(true);
    try {
      const assetsConfigStr = localStorage.getItem('assetsConfig');
      const liabilitiesConfigStr = localStorage.getItem('liabilitiesConfig');

      // Default fallback if empty using generated defaults
      const assetsConfig = assetsConfigStr ? JSON.parse(assetsConfigStr) : genDefaultAssets;
      const liabilitiesConfig = liabilitiesConfigStr ? JSON.parse(liabilitiesConfigStr) : genDefaultLiabilities;

      const processedRows = await fetchAndAggregateData(assetsConfig, liabilitiesConfig);
      setRows(processedRows);
      setFilteredRows(processedRows);
      console.log("Processed Rows : ", processedRows);

    } catch (e) {
      console.error("Error loading summary data", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();

    // Listen for data updates
    const handleDataUpdate = () => loadData();
    window.addEventListener('dataUpdated', handleDataUpdate);
    return () => window.removeEventListener('dataUpdated', handleDataUpdate);
  }, [loadData]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  const handleGenerateData = async () => {
    setIsGenerating(true);
    setGenerationMessage('Initializing generation...');
    try {
      await generateRandomDataAsync((msg) => {
        setGenerationMessage(msg);
      });
      setGenerationMessage('Data generated! refreshing...');
      await loadData(); // Reload data
    } catch (error) {
      console.error("Generation failed", error);
      setGenerationMessage('Generation failed see console.');
    } finally {
      setIsGenerating(false);
      setGenerationMessage('');
    }
  };

  const currencyFormatter = (value) => {
    if (value == null) return '';
    const formatted = value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return value > 0 ? `+${formatted}` : formatted;
  };

  // Define Columns
  const columns = [
    { field: 'category', headerName: 'Entity', width: 200 },
    { field: 'invoiceType', headerName: 'Asset/Liability', width: 150 },
    { field: 'year', headerName: 'Year', width: 100 },
    { field: 'initialBalance', headerName: 'Initial Balance', width: 150, type: 'number', valueFormatter: currencyFormatter },
    { field: 'January', headerName: 'January', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'February', headerName: 'February', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'March', headerName: 'March', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'April', headerName: 'April', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'May', headerName: 'May', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'June', headerName: 'June', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'July', headerName: 'July', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'August', headerName: 'August', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'September', headerName: 'September', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'October', headerName: 'October', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'November', headerName: 'November', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'December', headerName: 'December', width: 100, type: 'number', valueFormatter: currencyFormatter },
    { field: 'total', headerName: 'Total Amount', width: 150, type: 'number', valueFormatter: currencyFormatter },
  ];

  const uniqueYears = [...new Set(rows.map(row => row.year))].sort((a, b) => b - a);
  const uniqueInvoiceTypes = [...new Set(rows.map(row => row.invoiceType))].sort();
  const uniqueCategories = [...new Set(rows.map(row => row.category))].sort();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Box sx={{ mb: 3, width: '100%' }}>
        {/* Filters */}
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel>Entity</InputLabel>
          <Select
            multiple
            name="categories"
            value={filters.categories}
            onChange={handleFilterChange}
            input={<OutlinedInput label="Entity" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {uniqueCategories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                <Checkbox checked={filters.categories.indexOf(cat) > -1} />
                <ListItemText primary={cat} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel>Type</InputLabel>
          <Select
            multiple
            name="invoiceTypes"
            value={filters.invoiceTypes}
            onChange={handleFilterChange}
            input={<OutlinedInput label="Type" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {uniqueInvoiceTypes.map((type) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={filters.invoiceTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel>Year</InputLabel>
          <Select
            multiple
            name="years"
            value={filters.years}
            onChange={handleFilterChange}
            input={<OutlinedInput label="Year" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {uniqueYears.map((year) => (
              <MenuItem key={year} value={year}>
                <Checkbox checked={filters.years.indexOf(year) > -1} />
                <ListItemText primary={year} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleGenerateData}
          disabled={isGenerating}
          sx={{ m: 1 }}
        >
          Apply Filters
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleGenerateData}
          disabled={isGenerating}
          sx={{ m: 1 }}
        >
          {isGenerating ? 'Generating...' : 'Populate Demo Data'}
        </Button>
      </Box>

      {isGenerating && <Typography variant="caption" sx={{ display: 'block', mb: 1, textAlign: 'center' }}>{generationMessage}</Typography>}

      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
      <TreasuryTotals rows={filteredRows} columns={columns} />
    </Container >
  );
};

export default Treasury;
