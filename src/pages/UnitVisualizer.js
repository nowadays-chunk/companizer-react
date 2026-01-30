// src/pages/UnitVisualizer.js (or Visualizer.js)
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Divider,
  Chip,
  Container,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel as MuiFormControlLabel,
  MenuItem,
} from '@mui/material';

import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import DetailsVisualizer from './DetailsVisualizer';

const pathify = (urlParam) => {
  return urlParam
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
};

// =======================
// DATE HELPERS
// =======================

// MySQL or ISO string -> value for <input type="datetime-local">
// Output: "YYYY-MM-DDTHH:MM"
const toDateTimeLocal = (value) => {
  if (!value) return '';

  let s = String(value).trim();

  // "YYYY-MM-DD HH:MM:SS[.fraction]" -> "YYYY-MM-DDTHH:MM:SS[.fraction]"
  if (s[10] === ' ') {
    s = s.slice(0, 10) + 'T' + s.slice(11);
  }

  // Strip trailing "Z" (ISO UTC) if present
  s = s.replace(/Z$/, '');

  // Strip timezone offsets like +01:00 or -05:00 at the end
  s = s.replace(/([+-]\d{2}:\d{2})$/, '');

  // Only keep "YYYY-MM-DDTHH:MM"
  return s.slice(0, 16);
};

// <input type="datetime-local"> value -> MySQL DATETIME(6) string
// Input:  "YYYY-MM-DDTHH:MM"
// Output: "YYYY-MM-DD HH:MM:SS.000000"
const fromDateTimeLocal = (value) => {
  if (!value) return '';
  const [datePart, timePart] = value.split('T');
  if (!datePart || !timePart) return value;
  return `${datePart} ${timePart}:00.000000`;
};

// Normalize all *business* date fields (not metadata) to "YYYY-MM-DD HH:MM:SS.000000"
const normalizeDatesForSave = (data, fieldsConfig) => {
  if (!data || !fieldsConfig) return data;

  const result = { ...data };

  Object.entries(fieldsConfig).forEach(([key, field]) => {
    // skip metadata
    if (key === 'created_at' || key === 'updated_at') return;

    if (field.type === 'date' && result[key]) {
      let v = String(result[key]).trim();

      // Already MySQL-like "YYYY-MM-DD HH:MM:SS[.fraction]"
      if (v[10] === ' ') {
        if (!v.includes('.')) {
          result[key] = `${v}.000000`;
        } else {
          const [main, frac] = v.split('.');
          result[key] = `${main}.${frac.padEnd(6, '0')}`;
        }
      } else {
        // ISO-like / other → convert via helpers
        const local = toDateTimeLocal(v);      // "YYYY-MM-DDTHH:MM"
        result[key] = fromDateTimeLocal(local); // → MySQL DATETIME(6)
      }
    }
  });

  return result;
};

// =======================
// COMPONENT
// =======================

const Visualizer = ({ mode = 'view' }) => {
  const { main, sub, entity, id } = useParams();
  const navigate = useNavigate();

  const holdingFolder = pathify(main);
  const subFolder = pathify(sub);
  const componentName = pathify(entity);

  const [itemData, setItemData] = useState(null);
  const [config, setConfig] = useState(null);

  // New state for Detail config
  const [detailConfig, setDetailConfig] = useState(null);
  const [detailEntityName, setDetailEntityName] = useState(null);

  const [formData, setFormData] = useState({});
  const [formInitialized, setFormInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const isView = mode === 'view';
  const isEdit = mode === 'edit';
  const isCreate = mode === 'create';

  const collectionName = entity;

  const queryHelpers = useMemo(
    () => helpersWrapper(collectionName),
    [collectionName]
  );
  const { fetchItemById, addItem, updateItem, deleteItem } = queryHelpers;

  // Load config & detail config
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const configModule = await import(
          `../components/Management/${holdingFolder}/${subFolder}/${componentName}`
        );
        setConfig(configModule.default || configModule);

        // Try to load Detail config
        // Convention: Details/ComponentNameDetails.js in the same folder
        try {
          const detailName = `${componentName}Details`;
          const detailModule = await import(
            `../components/Management/${holdingFolder}/${subFolder}/Details/${detailName}`
          );
          setDetailConfig(detailModule.default || detailModule);
          setDetailEntityName(detailModule.entityName || detailModule.default?.entityName);
        } catch (detailErr) {
          // No detail config found, which is fine
          console.log("No detail configuration found for", componentName);
          setDetailConfig(null);
        }

      } catch (err) {
        console.error('Error loading configuration:', err);
        setError('Configuration file not found for this entity.');
        setLoading(false);
      }
    };

    loadConfig();
  }, [holdingFolder, subFolder, componentName]);

  // Load data / init form
  useEffect(() => {
    const fetchData = async () => {
      if (!config) return;

      setError(null);

      if (isView || isEdit) {
        try {
          const data = await fetchItemById(id);
          if (!data) {
            setError('Item not found.');
          }
          setItemData(data);

          if (isEdit && data && !formInitialized) {
            // initialize form once with backend data
            setFormData(data);
            setFormInitialized(true);
          }
        } catch (err) {
          console.error('Error fetching item data:', err);
          setError('Error loading this item.');
        } finally {
          setLoading(false);
        }
      } else if (isCreate && !formInitialized) {
        const initial = Object.keys(config.fieldsConfig)
          .filter((key) => key !== 'created_at' && key !== 'updated_at') // don't create metadata fields
          .reduce((acc, key) => {
            const field = config.fieldsConfig[key];
            if (field.type === 'checkbox') {
              acc[key] = false;
            } else {
              acc[key] = '';
            }
            return acc;
          }, {});
        setFormData(initial);
        setFormInitialized(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [config, id, isView, isEdit, isCreate, fetchItemById, formInitialized]);

  const handleFieldChange = (fieldKey, fieldConfig) => (event) => {
    // never edit metadata via form
    if (fieldKey === 'created_at' || fieldKey === 'updated_at') return;

    let value;

    if (fieldConfig.type === 'checkbox') {
      value = event.target.checked;
    } else if (fieldConfig.type === 'number') {
      value = event.target.value === '' ? '' : Number(event.target.value);
    } else if (fieldConfig.type === 'date') {
      // store already as MySQL DATETIME(6)
      value = fromDateTimeLocal(event.target.value);
    } else {
      value = event.target.value;
    }

    setFormData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const goToView = (itemId) => {
    navigate(`/${main}/${sub}/${entity}/view/${itemId}`);
  };

  const handleSave = async () => {
    setError(null);
    setSaving(true);

    try {
      // 1) start from formData but KEEP metadata from original record (if any)
      let payload = { ...formData };

      if (isEdit && itemData) {
        // make sure we don't lose created_at / updated_at (we don't overwrite them)
        delete payload.created_at;
        delete payload.updated_at;
      }

      if (isCreate) {
        // ensure we don't set metadata on create, let DB defaults do it
        delete payload.created_at;
        delete payload.updated_at;
      }

      // 2) Normalize datetime fields (except metadata)
      payload = normalizeDatesForSave(payload, config.fieldsConfig);

      if (isCreate) {
        const newId = await addItem(payload);
        if (!newId && newId !== 0) {
          throw new Error('No ID returned from server');
        }
        goToView(newId);
      } else if (isEdit) {
        await updateItem(id, payload);
        goToView(id);
      }
    } catch (err) {
      console.error('Error saving document:', err);
      setError('Could not save changes. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (isEdit) {
      goToView(id);
    } else if (isCreate) {
      navigate(-1);
    } else {
      navigate(-1);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    setError(null);

    try {
      await deleteItem(id);
      navigate(-1);
    } catch (err) {
      console.error('Error deleting document:', err);
      setError('Could not delete this item. Please try again.');
    }
  };

  if (loading) return <CircularProgress />;

  if (!config) {
    return (
      <Typography variant="h6">
        Invalid entity name or configuration file not found.
      </Typography>
    );
  }

  const entityLabel = entity.charAt(0).toUpperCase() + entity.slice(1);

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 3, paddingBottom: 7 }}>
      <Card sx={{ width: '100%', mt: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {entityLabel}{' '}
            {isView && 'Details'}
            {isEdit && '– Edit'}
            {isCreate && '– Create'}
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {error && (
            <Box mb={2}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}

          {isView && !itemData && !error && (
            <Typography variant="body1">Item not found.</Typography>
          )}

          {/* VIEW MODE */}
          {isView && itemData && (
            <>
              <Grid container spacing={2}>
                {Object.keys(config.fieldsConfig).map((fieldKey) => {
                  const field = config.fieldsConfig[fieldKey];
                  const value = itemData[fieldKey];

                  return (
                    <Grid item xs={12} sm={6} key={fieldKey}>
                      <Typography variant="subtitle2" color="textSecondary">
                        {field.label}:
                      </Typography>
                      {renderField(value, field)}
                    </Grid>
                  );
                })}
              </Grid>

              <Box mt={3} display="flex" gap={2}>
                <Button
                  variant="contained"
                  onClick={() =>
                    navigate(`/${main}/${sub}/${entity}/edit/${id}`)
                  }
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Box>
            </>
          )}

          {/* EDIT / CREATE MODE */}
          {(isEdit || isCreate) && (
            <>
              <Grid container spacing={2}>
                {Object.keys(config.fieldsConfig)
                  .filter((fieldKey) => fieldKey !== 'created_at' && fieldKey !== 'updated_at') // don't show metadata in form
                  .map((fieldKey) => {
                    const field = config.fieldsConfig[fieldKey];
                    const rawValue = formData[fieldKey];

                    // CHECKBOX
                    if (field.type === 'checkbox') {
                      return (
                        <Grid item xs={12} key={fieldKey}>
                          <MuiFormControlLabel
                            control={
                              <Checkbox
                                checked={!!rawValue}
                                onChange={handleFieldChange(fieldKey, field)}
                              />
                            }
                            label={field.label}
                          />
                        </Grid>
                      );
                    }

                    // SELECT (single)
                    if (
                      field.type === 'select' &&
                      Array.isArray(field.options)
                    ) {
                      return (
                        <Grid item xs={12} sm={6} key={fieldKey}>
                          <TextField
                            fullWidth
                            select
                            label={field.label}
                            value={rawValue ?? ''}
                            onChange={handleFieldChange(fieldKey, field)}
                          >
                            {field.options.map((opt) => (
                              <MenuItem key={opt.id} value={opt.id}>
                                {opt.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      );
                    }

                    // Numbers / Dates / Generic text
                    let inputType = 'text';
                    let valueProp = rawValue ?? '';

                    if (field.type === 'number') {
                      inputType = 'number';
                    } else if (field.type === 'date') {
                      inputType = 'datetime-local';
                      valueProp = toDateTimeLocal(rawValue);
                    }

                    const isLongText =
                      field.type === 'textarea' ||
                      field.multiline ||
                      field.longText;

                    return (
                      <Grid item xs={12} sm={6} key={fieldKey}>
                        <TextField
                          fullWidth
                          label={field.label}
                          type={inputType}
                          value={valueProp}
                          onChange={handleFieldChange(fieldKey, field)}
                          multiline={!!isLongText}
                          minRows={isLongText ? 3 : 1}
                        />
                      </Grid>
                    );
                  })}
              </Grid>

              <Box mt={3} display="flex" gap={2}>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save'}
                </Button>
                <Button variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>

      {/* Detail Visualizer Sub-Component */}
      {isView && detailConfig && itemData && (
        <DetailsVisualizer
          parentId={id}
          detailConfig={detailConfig}
          detailEntityName={detailEntityName || `${entity}_details`}
          fkFieldName={`${entity.replace(/s$/, '')}_id`} // Simple heuristic: plural 'clients' -> 'client_id'
        />
      )}
    </Container>
  );
};

export default Visualizer;

/* ---------- VIEW rendering only ---------- */
function renderField(value, fieldConfig) {
  if (fieldConfig.type === 'select' && Array.isArray(fieldConfig.options)) {
    if (Array.isArray(value)) {
      return (
        <Box display="flex" flexWrap="wrap" mt={1}>
          {value.map((val) => {
            const optionLabel = fieldConfig.options.find(
              (opt) => opt.id === val
            )?.label;
            return optionLabel ? (
              <Link key={val} to={`${fieldConfig.link}/${val}`}>
                <Chip
                  label={optionLabel}
                  color="primary"
                  variant="outlined"
                  style={{ margin: '4px' }}
                />
              </Link>
            ) : null;
          })}
        </Box>
      );
    } else {
      const optionLabel = fieldConfig.options.find(
        (opt) => opt.id === value
      )?.label;
      return (
        <Box mt={1}>
          {optionLabel ? (
            <Chip label={optionLabel} color="primary" variant="outlined" />
          ) : (
            'N/A'
          )}
        </Box>
      );
    }
  }

  if (fieldConfig.type === 'date') {
    // Show raw DB string – will be "YYYY-MM-DD HH:MM:SS.000000"
    return <Typography variant="body1">{value || 'N/A'}</Typography>;
  }

  if (fieldConfig.type === 'checkbox') {
    return <Typography variant="body1">{value ? 'Yes' : 'No'}</Typography>;
  }

  return <Typography variant="body1">{value || 'N/A'}</Typography>;
}
