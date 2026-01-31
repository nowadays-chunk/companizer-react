
// src/pages/UnitVisualizer.js
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Container,
  Box,
  TextField,
  Button,
  MenuItem,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper
} from '@mui/material';
import {
  Settings,
  Close,
  CheckCircle,
  ThumbUp,
  Cancel,
  Paid,
  Restore,
  PictureAsPdf,
  Email,
  Delete,
  History,
  Archive,
  Send
} from '@mui/icons-material';

import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import { keyToLinkMap } from '../layout/keyToLinkMap';
// User requested using BaseManagementComponent for details
import BaseManagementComponent from '../components/Management/Base';
// Import Comments Config
import { collectionName as commentsCollectionName } from '../components/Management/entity_comments_history';
// Import Action Timeline and Logs Config
import ActionTimeline from '../components/ActionTimeline';
import { collectionName as logsCollectionName } from '../components/Management/manager_action_logs';

// Icon mapping for dynamic actions
const ICON_MAP = {
  CheckCircle, ThumbUp, Cancel, Paid, Restore, PictureAsPdf, Email, Delete, History, Archive
};

const pathify = (urlParam) => {
  if (!urlParam) return '';
  return urlParam
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
};

// ... Date Helpers (kept same) ...
const toDateTimeLocal = (value) => {
  if (!value) return '';
  let s = String(value).trim();
  if (s[10] === ' ') {
    s = s.slice(0, 10) + 'T' + s.slice(11);
  }
  s = s.replace(/Z$/, '').replace(/([+-]\d{2}:\d{2})$/, '');
  return s.slice(0, 16);
};

const fromDateTimeLocal = (value) => {
  if (!value) return '';
  const [datePart, timePart] = value.split('T');
  if (!datePart || !timePart) return value;
  return `${datePart} ${timePart}:00.000000`;
};

const normalizeDatesForSave = (data, fieldsConfig) => {
  if (!data || !fieldsConfig) return data;
  const result = { ...data };
  Object.entries(fieldsConfig).forEach(([key, field]) => {
    if (key === 'created_at' || key === 'updated_at') return;
    if (field.type === 'date' && result[key]) {
      let v = String(result[key]).trim();
      if (v[10] === ' ') {
        if (!v.includes('.')) {
          result[key] = `${v}.000000`;
        } else {
          const [main, frac] = v.split('.');
          result[key] = `${main}.${frac.padEnd(6, '0')}`;
        }
      } else {
        const local = toDateTimeLocal(v);
        result[key] = fromDateTimeLocal(local);
      }
    }
  });
  return result;
};


const Visualizer = (props) => {
  // Support both URL params and explicit props (for recursion)
  const params = useParams();
  const navigate = useNavigate();

  const main = props.main || params.main;
  const sub = props.sub || params.sub;
  const rawEntity = props.entity || params.entity;
  const isDetail = props.isDetail || false;

  // If isDetail is true, append -details to load the correct config/data
  const entity = isDetail ? `${rawEntity}-details` : rawEntity;

  const idValue = props.id || params.id;

  const mode = props.mode || (window.location.hash.includes('/edit/') ? 'edit' : window.location.hash.includes('/create') ? 'create' : 'view');

  const holdingFolder = pathify(main);
  const subFolder = pathify(sub);
  const componentName = pathify(entity);

  const [itemData, setItemData] = useState(null);
  const [config, setConfig] = useState(props.config || null); // Can receive config directly

  // Logic Config (Actions, Steps)
  const [logicConfig, setLogicConfig] = useState(null);

  // Detail Config
  const [detailConfig, setDetailConfig] = useState(null);
  const [detailEntityName, setDetailEntityName] = useState(null);

  // Form State
  const [formData, setFormData] = useState({});
  const [formInitialized, setFormInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Nested Navigation (Dialog)
  const [nestedItem, setNestedItem] = useState(null); // { id, mode, entity, config }

  // Config Dialog
  const [showConfigDialog, setShowConfigDialog] = useState(false);
  const [configEntityConfig, setConfigEntityConfig] = useState(null);

  // Comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const isView = mode === 'view';
  const isEdit = mode === 'edit';
  const isCreate = mode === 'create';

  const collectionName = config?.collectionName || entity;

  const queryHelpers = useMemo(
    () => helpersWrapper(collectionName),
    [collectionName]
  );

  // 1. Load Main Config & Detail Config & Logic Config

  const commentsHelpers = useMemo(() => helpersWrapper(commentsCollectionName), []);
  const logsHelpers = useMemo(() => helpersWrapper(logsCollectionName), []);
  const [refreshTimeline, setRefreshTimeline] = useState(0); // Trigger to reload timeline

  // Actions Logic
  const handleAction = async (actionName) => {
    if (!logicConfig?.actionsConfig?.[actionName]) return;
    const actionDef = logicConfig.actionsConfig[actionName];

    console.log(`Executing action: ${actionName}`, actionDef);

    const logEntry = {
      action_type: actionDef.label || actionName, // Use label for display, or name fallback
      entity_type: collectionName,
      entity_id: idValue,
      accountable_id: 'Current User', // Mock, should come from auth context
      processing_step: actionDef.nextStep || itemData?.processing_step, // New step or current
      status: 'success', // Assume success initially, correct in catch
      details: `Action "${actionName}" initiated.`,
      unit_price: itemData?.unit_price || 0 // Snapshot price if needed
    };

    try {
      // Update Step if defined
      if (actionDef.nextStep) {
        const updatedData = { ...itemData, processing_step: actionDef.nextStep };

        // Update via API
        await queryHelpers.updateItem(idValue, { processing_step: actionDef.nextStep });

        // Update local state
        setItemData(updatedData);

        // Show success message
        alert(`Action "${actionDef.label}" executed successfully! Status updated to: ${actionDef.nextStep}`);

        logEntry.details += ` Status changed to ${actionDef.nextStep}.`;
      } else {
        // Action without step change (e.g., send email, generate PDF)
        alert(`Action "${actionDef.label}" executed!`);
      }

      // Log success
      await logsHelpers.addItem(logEntry);
      setRefreshTimeline(prev => prev + 1); // Refresh timeline

    } catch (error) {
      console.error('Error executing action:', error);
      alert(`Failed to execute action: ${error.message}`);

      // Log failure
      logEntry.status = 'failed';
      logEntry.details += ` Error: ${error.message}`;
      await logsHelpers.addItem(logEntry);
      setRefreshTimeline(prev => prev + 1);
    }
  };


  useEffect(() => {
    if (props.config) {
      // If config passed via props, we might still need to load logic config if it matches the folder structure
      // holdingFolder might be undefined if called recursively with just config.
      // For now assume logic config only loads if we are top-level or have folder info
      return;
    }

    const loadConfig = async () => {
      try {
        // A. Main Config
        let configModule;
        try {
          configModule = await import(
            `../components/Management/${holdingFolder}/${subFolder}/${componentName}`
          );
        } catch (e) {
          // Fallback: Try importing from Details folder
          try {
            configModule = await import(
              `../components/Management/${holdingFolder}/${subFolder}/Details/${componentName}`
            );
          } catch (e2) {
            // Throw original error if both fail
            throw e;
          }
        }
        setConfig(configModule.default || configModule);

        // B. Detail Config
        try {
          const detailName = `${componentName}Details`;
          const detailModule = await import(
            `../components/Management/${holdingFolder}/${subFolder}/Details/${detailName}`
          );
          setDetailConfig(detailModule.default || detailModule);

          // PREFER collectionName for DB interaction, fallback to entityName
          const mod = detailModule.default || detailModule;
          setDetailEntityName(mod.collectionName || mod.entityName);

        } catch (detailErr) {
          // Ignore
        }

        // C. Logic/Config File (Actions & Steps)
        // Use config registry instead of dynamic import
        try {
          console.log('🔍 Attempting to load Config for:', componentName);

          // Import the registry
          const { getConfig } = await import('../components/Management/configRegistry.js');
          let logicModule = getConfig(componentName);

          // If simple name lookup fails, try disambiguated name using subFolder (for handled duplicates)
          if (!logicModule && subFolder) {
            const disambiguatedName = `${subFolder.replace(/[^a-zA-Z0-9]/g, '')}_${componentName}`;
            logicModule = getConfig(disambiguatedName);
            if (logicModule) {
              console.log(`✅ Loaded config using disambiguated key: ${disambiguatedName}`);
            }
          }

          if (logicModule) {
            console.log('✅ Config loaded successfully:', logicModule);
            setLogicConfig(logicModule);

            // logicModule should export stepsConfig, actionsConfig, fieldsConfig (for settings)
            if (logicModule.fieldsConfig) {
              setConfigEntityConfig({
                fieldsConfig: logicModule.fieldsConfig,
                collectionName: logicModule.collectionName || `${entity}_config`
              });
            }
          } else {
            console.warn('⚠️ No config found in registry for:', componentName);
          }
        } catch (logicErr) {
          console.warn('⚠️ Error loading config:', logicErr.message);
          // No logic config
        }

      } catch (err) {
        console.error('Error loading configuration:', err);
        setError('Configuration file not found.');
      }
    };

    if (holdingFolder && subFolder && componentName) {
      loadConfig();
    }
  }, [holdingFolder, subFolder, componentName, props.config]);


  // 2. Load Item Data + Comments
  useEffect(() => {
    const fetchData = async () => {
      if (!config) return;

      setLoading(true);
      setError(null);

      try {
        if (isView || isEdit) {
          const data = await queryHelpers.fetchItemById(idValue);
          if (!data) setError('Item not found.');
          setItemData(data);

          if (isEdit && !formInitialized) {
            // Fix: If data is null (e.g. config doesn't exist yet), default to empty object to prevent crash
            setFormData(data || {});
            setFormInitialized(true);
          }

          // Load Comments
          if (data) {
            const allComments = await commentsHelpers.fetchItems();
            const relevant = allComments.filter(c => c.entity_id === idValue && c.entity_type === collectionName);
            setComments(relevant);
          }

        } else if (isCreate && !formInitialized) {
          const initial = Object.keys(config.fieldsConfig)
            .filter((key) => key !== 'created_at' && key !== 'updated_at')
            .reduce((acc, key) => {
              const f = config.fieldsConfig[key];
              acc[key] = f.type === 'checkbox' ? false : '';
              return acc;
            }, {});
          setFormData(initial);
          setFormInitialized(true);
        }
      } catch (err) {
        console.error(err);
        setError('Error loading data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [config, idValue, isView, isEdit, isCreate, queryHelpers, commentsHelpers, collectionName, formInitialized]);

  // Handlers
  const handleFieldChange = (key, field) => (e) => {
    let val = e.target.value;
    if (field.type === 'checkbox') val = e.target.checked;
    else if (field.type === 'number') val = val === '' ? '' : Number(val);
    else if (field.type === 'date') val = fromDateTimeLocal(val);

    setFormData(prev => ({ ...prev, [key]: val }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      let payload = { ...formData };
      if (isEdit) { delete payload.created_at; delete payload.updated_at; }
      if (isCreate) { delete payload.created_at; delete payload.updated_at; }

      payload = normalizeDatesForSave(payload, config.fieldsConfig);

      let savedId = idValue;
      if (isCreate) {
        savedId = await queryHelpers.addItem(payload);
      } else {
        await queryHelpers.updateItem(idValue, payload);
      }

      if (props.onClose) props.onClose();
      else navigate(isCreate ? `/${main}/${sub}/${entity}/view/${savedId}` : `/${main}/${sub}/${entity}/view/${idValue}`);

    } catch (e) {
      console.error(e);
      setError('Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this item?')) return;
    await queryHelpers.deleteItem(idValue);

    if (isDetail) {
      window.close();
      return;
    }

    if (props.onClose) props.onClose();
    else navigate(-1);
  };



  // New Comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    const commentPayload = {
      entity_type: collectionName,
      entity_id: idValue,
      comment_text: newComment,
      author_name: 'Current User', // Mock
      // created_at is handled by DB defaults usually, but firebase helpers might need it? 
      // If using MySQL with generate_sql.js, we have created_at DEFAULT CURRENT_TIMESTAMP.
    };

    try {
      await commentsHelpers.addItem(commentPayload);
      setNewComment('');

      // Re-fetch comments to get the server-generated timestamp
      const allComments = await commentsHelpers.fetchItems();
      const relevant = allComments.filter(c => c.entity_id === idValue && c.entity_type === collectionName);
      setComments(relevant);
    } catch (e) {
      console.error("Failed to add comment", e);
    }
  };

  // Nested Details Handler
  const handleNestedRowClick = (rowId, rowMode = 'view') => {
    setNestedItem({
      id: rowId,
      mode: rowMode,
      config: detailConfig, // Pass the loaded detail config
      entity: detailEntityName
    });
  };

  const getStepActions = () => {
    console.log('🎯 getStepActions called:', {
      hasLogicConfig: !!logicConfig,
      hasStepsConfig: !!logicConfig?.stepsConfig,
      hasItemData: !!itemData,
      currentStep: itemData?.processing_step,
      initialStep: logicConfig?.stepsConfig?.initialStep
    });

    if (!logicConfig?.stepsConfig || !itemData) return [];
    const currentStep = itemData.processing_step || logicConfig.stepsConfig.initialStep;
    const stepDef = logicConfig.stepsConfig.steps.find(s => s.name === currentStep);

    console.log('📋 Step definition found:', stepDef);
    console.log('🔘 Actions for current step:', stepDef?.actions || []);

    return stepDef?.actions || [];
  };

  if (loading) return <Box p={4} display="flex" justifyContent="center"><CircularProgress /></Box>;
  if (!config) return <Typography>Config not found.</Typography>;

  return (
    <Container maxWidth="lg" sx={{
      paddingTop: 3,
      paddingBottom: 7,
      width: '100%',
      overflowX: 'hidden' // Prevent horizontal scroll
    }}>
      {/* HEADER & ACTIONS */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">{componentName} {isView ? 'Details' : isEdit ? 'Edit' : 'Create'}</Typography>
        <Box gap={1} display="flex">
          {configEntityConfig && (
            <Button startIcon={<Settings />} variant="outlined" onClick={() => setShowConfigDialog(true)}>
              Configure
            </Button>
          )}
          {props.onClose && (
            <IconButton onClick={props.onClose}><Close /></IconButton>
          )}
        </Box>
      </Box>

      {/* ACTION BAR (Only in View Mode) */}
      {isView && logicConfig && (
        <Paper sx={{ p: 2, mb: 3, bgcolor: '#f5f5f5', borderLeft: '4px solid #1976d2' }}>
          <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', minWidth: '150px' }}>
              Current Step:
              <Box component="span" sx={{ ml: 1, px: 1.5, py: 0.5, bgcolor: '#1976d2', color: 'white', borderRadius: 1, fontSize: '0.875rem' }}>
                {itemData?.processing_step || logicConfig?.stepsConfig?.initialStep || 'N/A'}
              </Box>
            </Typography>
            <Box flexGrow={1} />
            {getStepActions().map(actionName => {
              const def = logicConfig.actionsConfig[actionName];
              if (!def) return null;
              const Icon = ICON_MAP[def.icon] || CheckCircle;
              return (
                <Button
                  key={actionName}
                  variant="contained"
                  color={def.type === 'error' ? 'error' : def.type === 'success' ? 'success' : def.type === 'warning' ? 'warning' : 'primary'}
                  startIcon={<Icon />}
                  onClick={() => handleAction(actionName)}
                  sx={{ minWidth: '140px' }}
                >
                  {def.label}
                </Button>
              );
            })}
          </Box>
        </Paper>
      )}

      {/* MAIN FORM/VIEW */}
      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          {error && <Typography color="error">{error}</Typography>}

          <Grid container spacing={2}>
            {Object.keys(config.fieldsConfig).filter(k => isView || (k !== 'created_at' && k !== 'updated_at')).map(key => {
              const field = config.fieldsConfig[key];
              return (
                <Grid item xs={12} sm={6} key={key}>
                  {isView ? (
                    <Box>
                      <Typography variant="caption" color="textSecondary">{field.label}</Typography>
                      <Typography variant="body1">{String(itemData?.[key] || '-')}</Typography>
                    </Box>
                  ) : (
                    // Simplified Form Input rendering for brevity (reuses logic from original)
                    <TextField
                      fullWidth
                      label={field.label}
                      type={field.type === 'number' ? 'number' : field.type === 'date' ? 'datetime-local' : 'text'}
                      select={field.type === 'select'}
                      value={field.type === 'checkbox' ? undefined : (formData[key] ?? '')}
                      InputLabelProps={{ shrink: true }}
                      onChange={handleFieldChange(key, field)}
                    >
                      {field.type === 'select' && field.options?.map(o => (
                        <MenuItem key={o.id} value={o.id}>{o.label}</MenuItem>
                      ))}
                    </TextField>
                  )}
                </Grid>
              );
            })}
          </Grid>

          <Box mt={3} gap={2} display="flex">
            {isView ? (
              <>
                <Button variant="contained" onClick={() => props.onEdit ? props.onEdit() : navigate(`/${main}/${sub}/${entity}/edit/${idValue}`)}>Edit</Button>
                <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
              </>
            ) : (
              <>
                <Button variant="contained" onClick={handleSave} disabled={saving}>Save</Button>
                <Button variant="outlined" onClick={() => props.onClose ? props.onClose() : navigate(-1)}>Cancel</Button>
              </>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* NESTED DETAILS (BaseManagementComponent) */}
      {isView && detailConfig && (
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>Related Details</Typography>
          <BaseManagementComponent
            // We must construct a fetcher that filters by parent ID
            fetchItems={async () => {
              const wrapper = helpersWrapper(detailEntityName || `${entity}_details`);
              const all = await wrapper.fetchItems();

              // Standardized FK: parent_id
              const fkField = 'parent_id';

              return all.filter(r => r[fkField] === idValue);
            }}
            addItem={async (row) => {
              const wrapper = helpersWrapper(detailEntityName);

              // Standardized FK: parent_id
              const fkField = 'parent_id';

              const payload = { ...row, [fkField]: idValue };
              return wrapper.addItem(payload);
            }}
            deleteItem={async (itemId) => helpersWrapper(detailEntityName).deleteItem(itemId)}
            updateItem={async (itemId, row) => helpersWrapper(detailEntityName).updateItem(itemId, row)}

            fieldConfig={detailConfig.fieldsConfig}
            entityName={detailEntityName}

            // Enable navigation to detail entity view
            onViewItem={(itemId) => {
              // Construct parent base URL from rawEntity (e.g. vendor-invoices)
              // keyToLinkMap uses keys like 'vendor-invoices' to return '/financial-management/accounts-payable/vendor-invoices'
              const parentBaseUrl = keyToLinkMap[rawEntity] || `/${main}/${sub}/${rawEntity}`;
              window.open(`/#${parentBaseUrl}/details/view/${itemId}`, '_blank');
            }}
            onEditItem={(itemId) => {
              const parentBaseUrl = keyToLinkMap[rawEntity] || `/${main}/${sub}/${rawEntity}`;
              window.open(`/#${parentBaseUrl}/details/edit/${itemId}`, '_blank');
            }}
          />
        </Box>
      )}

      {/* COMMENTS SECTION */}
      {isView && (
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>Comments</Typography>
          <Card>
            <CardContent>
              <List>
                {comments.map((c, i) => (
                  <ListItem key={i} alignItems="flex-start">
                    <ListItemAvatar><Avatar>{c.author_name?.[0]}</Avatar></ListItemAvatar>
                    <ListItemText
                      primary={c.author_name}
                      secondary={<>
                        <Typography component="span" variant="body2" color="textPrimary">{c.comment_text}</Typography>
                        <br />
                        <Typography component="span" variant="caption">{c.created_at ? new Date(c.created_at).toLocaleString() : 'Just now'}</Typography>
                      </>}
                    />
                  </ListItem>
                ))}
              </List>
              <Box display="flex" gap={1} mt={2}>
                <TextField fullWidth size="small" placeholder="Add a comment..." value={newComment} onChange={e => setNewComment(e.target.value)} />
                <IconButton color="primary" onClick={handleAddComment}><Send /></IconButton>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* ACTION TIMELINE */}
      {isView && (
        <ActionTimeline key={refreshTimeline} entityId={idValue} entityType={collectionName} />
      )}

      {/* DIALOG FOR NESTED ITEM */}
      <Dialog open={!!nestedItem} onClose={() => setNestedItem(null)} maxWidth="lg" fullWidth>
        <DialogContent>
          {nestedItem && (
            <Visualizer
              // Recursive Call
              config={nestedItem.config}
              entity={nestedItem.entity}
              id={nestedItem.id}
              mode={nestedItem.mode}
              onClose={() => setNestedItem(null)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* DIALOG FOR CONFIGURATION */}
      <Dialog open={showConfigDialog} onClose={() => setShowConfigDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Configuration: {componentName}</DialogTitle>
        <DialogContent>
          {configEntityConfig ? (
            <Visualizer
              config={configEntityConfig}
              entity={configEntityConfig.collectionName}
              mode="edit" // Always edit config
              id="default_config" // Singleton ID logic?
              // "default_config" is a mock ID. The backend handles if it creates or updates.
              onClose={() => setShowConfigDialog(false)}
            />
          ) : <Typography>No configurable settings found.</Typography>}
        </DialogContent>
      </Dialog>

    </Container>
  );
};

export default Visualizer;
