import React from 'react';
import { Box, Button, IconButton, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from '../../../contexts/TranslationProvider';

export default function FilterManager({ filters, setFilters, fieldConfig }) {
  const { t } = useTranslation();

  const handleAddFilter = () => {
    setFilters([...filters, { column: '', value: '', active: true }]);
  };

  const handleFilterChange = (index, key, value) => {
    const newFilters = filters.slice();
    newFilters[index][key] = value;
    setFilters(newFilters);
  };

  const handleRemoveFilter = (index) => {
    const newFilters = filters.slice();
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  return (
    <Box sx={{ mb: 2 }}>
      {filters.map((filter, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>{t('Column')}</InputLabel>
            <Select value={filter.column} onChange={(e) => handleFilterChange(index, 'column', e.target.value)}>
              {Object.keys(fieldConfig).map((key) => (
                <MenuItem key={key} value={key}>
                  {t(fieldConfig[key].label)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label={t('Value')}
            value={filter.value}
            onChange={(e) => handleFilterChange(index, 'value', e.target.value)}
            sx={{ ml: 2 }}
          />
          <IconButton onClick={() => handleRemoveFilter(index)} sx={{ ml: 2 }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button variant="contained" onClick={handleAddFilter} startIcon={<AddIcon />}>
        {t('Filter')}
      </Button>
    </Box>
  );
}
