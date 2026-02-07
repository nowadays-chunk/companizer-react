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
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Tooltip,
  Paper,
  Chip,
  Divider,
  Fade,
  Slide
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
  Edit,
  History,
  Archive,
  ArrowBackIosNew
} from '@mui/icons-material';

import { helpersWrapper } from '../utils/clientQueries';
import { keyToLinkMap } from '../layout/keyToLinkMap';
import * as WorkflowRulesConfig from '../components/Management/entity_workflow_rules.js';
import BaseManagementComponent from '../components/Base';
import CommentsSection from '../components/CommentsSection';
import ActionTimeline from '../components/ActionTimeline';
import { collectionName as logsCollectionName } from '../components/Management/manager_action_logs';
import { useTranslation } from '../contexts/TranslationProvider';
import { useAuthorization } from '../hooks/useAuthorization';
import VersionHistoryDialog from '../components/Versioning/VersionHistoryDialog';
import DocumentManager from '../components/DocumentManager/DocumentManager';
import { TermCalculator } from '../components/Management/FinancialManagement/AccountsPayable/Modules/PaymentTerms/TermCalculator';
import { DiscountEngine } from '../components/Management/FinancialManagement/AccountsPayable/Modules/PaymentTerms/DiscountEngine';
import { PaymentTermsExtraPanel } from '../components/Management/FinancialManagement/AccountsPayable/Modules/PaymentTerms/PaymentTermsUI';
import VendorStatement from '../components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger/VendorStatement';

// Using inline SX for "Fancy" specific overrides that go beyond the theme

const FieldDisplay = ({ label, value }) => (
  <Box sx={{
    mb: 2,
    p: 1.5,
    borderLeft: '2px solid transparent',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderLeft: '2px solid',
      borderColor: 'primary.main',
      bgcolor: 'action.hover',
      pl: 2
    }
  }}>
    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5, letterSpacing: '0.1em', fontSize: '0.7rem' }}>
      {label}
    </Typography>
    <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
      {value || '—'}
    </Typography>
  </Box>
);

const SectionHeader = ({ title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4 }}>
    <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.05em', mr: 2 }}>
      {title}
    </Typography>
    <Divider sx={{ flexGrow: 1 }} />
  </Box>
);

const StatusPill = ({ label }) => (
  <Chip
    label={label}
    sx={{
      borderRadius: 0,
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.05em',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      px: 1
    }}
  />
);

const ActionButton = ({ icon: Icon, label, onClick, color }) => (
  <Button
    variant="outlined"
    startIcon={<Icon />}
    onClick={onClick}
    color={color || 'primary'}
    sx={{
      borderWidth: '1px',
      borderColor: 'divider',
      color: 'text.secondary',
      justifyContent: 'flex-start',
      px: 2,
      py: 1.5,
      '&:hover': {
        borderWidth: '1px',
        borderColor: 'primary.main',
        color: 'primary.main',
        bgcolor: 'transparent'
      }
    }}
  >
    {label}
  </Button>
);


// --- HELPERS ---

const ICON_MAP = {
  CheckCircle: CheckCircle,
  ThumbUp: ThumbUp,
  Cancel: Cancel,
  Paid: Paid,
  Restore: Restore,
  PictureAsPdf: PictureAsPdf,
  Email: Email,
  Delete: Delete,
  History: History,
  Archive: Archive
};

const pathify = (urlParam) => {
  if (!urlParam) return '';
  return urlParam
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
};

const toDateTimeLocal = (value) => {
  if (!value) return '';
  let s = String(value).trim();
  if (s[10] === ' ') s = s.slice(0, 10) + 'T' + s.slice(11);
  return s.replace(/Z$/, '').replace(/([+-]\d{2}:\d{2})$/, '').slice(0, 16);
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
        if (!v.includes('.')) result[key] = `${v}.000000`;
        else {
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
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentUser, getAuthorizedActions } = useAuthorization();

  const main = props.main || params.main || params.module;
  const sub = props.sub || params.sub || params.subModule;
  const rawEntity = props.entity || params.entity || params.component;
  const isDetail = props.isDetail || false;
  const entity = isDetail ? `${rawEntity}-details` : rawEntity;
  const idValue = props.id || params.id;
  const mode = props.mode || (window.location.hash.includes('/edit/') ? 'edit' : window.location.hash.includes('/create') ? 'create' : 'view');

  // Fallback: Extract breadcrumb from path when params are missing
  const extractBreadcrumbFromPath = () => {
    const hash = window.location.hash.replace('#', '');
    const parts = hash.split('/').filter(p => p && p !== 'view' && p !== 'edit' && p !== 'create' && !p.match(/^\d+$/));

    if (parts.length >= 2) {
      return {
        main: parts[0] || 'Management',
        sub: parts[1] || '',
        entity: parts[2] || parts[1] || ''
      };
    }
    return { main: '', sub: '', entity: '' };
  };

  const breadcrumb = (main && sub) ? { main, sub, entity } : extractBreadcrumbFromPath();

  const holdingFolder = pathify(breadcrumb.main || main);
  const subFolder = pathify(breadcrumb.sub || sub);
  const componentName = pathify(breadcrumb.entity || entity);

  const [itemData, setItemData] = useState(null);
  const [config, setConfig] = useState(props.config || null);
  const [logicConfig, setLogicConfig] = useState(null);
  const [detailConfig, setDetailConfig] = useState(null);
  const [detailEntityName, setDetailEntityName] = useState(null);
  const [formData, setFormData] = useState({});
  const [formInitialized, setFormInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [nestedItem, setNestedItem] = useState(null);
  const [refreshTimeline, setRefreshTimeline] = useState(0);

  const isView = mode === 'view';
  const isEdit = mode === 'edit';
  const isCreate = mode === 'create';
  const collectionName = config?.collectionName || entity;

  const queryHelpers = useMemo(() => helpersWrapper(collectionName), [collectionName]);
  const logsHelpers = useMemo(() => helpersWrapper(logsCollectionName), []);
  const rulesHelpers = useMemo(() => helpersWrapper('entity_workflow_rules'), []);

  // --- ACTIONS ---
  const handleAction = async (actionName) => {
    // Robust Step Resolution
    const currentStep = itemData?.processing_step || logicConfig?.stepsConfig?.initialStep;

    // Fallback if action is defined in steps but not in actionsConfig
    let actionDef = logicConfig?.actionsConfig?.[actionName];
    if (!actionDef) {
      // Check if it's a known step action to allow execution even if details missing
      // But we need at least a label.
      actionDef = { label: actionName, name: actionName };
      console.warn(`Action ${actionName} missing from actionsConfig. Using default.`);
    }

    try {
      const rules = await rulesHelpers.fetchItems();
      const relevantRules = rules.filter(r =>
        r.is_active && r.entity_type === collectionName &&
        (r.current_step === currentStep || r.current_step === '*') &&
        (r.action_name === actionName || r.action_name === '*')
      );

      for (const rule of relevantRules) {
        let isValid = true;
        if (rule.rule_type === 'required_field') {
          if (!itemData[rule.rule_value] && itemData[rule.rule_value] !== 0) isValid = false;
        }
        if (!isValid) {
          alert(`Action Failed: ${rule.error_message || 'Validation rule verification failed.'}`);
          return;
        }
      }
    } catch (err) {
      // Don't block execution if rules fetch fails, just warn
      console.warn(`System Error: Could not verify workflow rules. ${err.message}`);
    }

    const logEntry = {
      action_type: actionDef.label || actionName,
      entity_type: collectionName,
      entity_id: idValue,
      accountable_id: 'Current User',
      processing_step: actionDef.nextStep || currentStep,
      status: 'success',
      details: `Action "${actionName}" initiated.`,
      unit_price: itemData?.unit_price || 0
    };

    try {
      if (actionDef.nextStep) {
        const updatedData = { ...itemData, processing_step: actionDef.nextStep };
        await queryHelpers.updateItem(idValue, { processing_step: actionDef.nextStep });
        setItemData(updatedData);

        // SPECIAL HANDLING: If action is "Generate PDF", open the window
        if (actionName === 'Generate PDF' || actionDef.label === 'Generate PDF' || actionDef.actionType === 'pdf') {
          window.open(`#/print/${main}/${sub}/${entity}/view/${idValue}`, '_blank');
          alert(`Action "${actionDef.label}" executed! PDF generated.`);
        } else {
          alert(`Action "${actionDef.label}" executed successfully! Status updated to: ${actionDef.nextStep}`);
        }

        logEntry.details += ` Status changed to ${actionDef.nextStep}.`;
      } else {
        // Even if no step change, check for PDF action
        if (actionName === 'Generate PDF' || actionDef.label === 'Generate PDF' || actionDef.actionType === 'pdf') {
          window.open(`#/print/${main}/${sub}/${entity}/view/${idValue}`, '_blank');
        }
        alert(`Action "${actionDef.label}" executed!`);
      }
      await logsHelpers.addItem(logEntry);
      setRefreshTimeline(prev => prev + 1);
    } catch (error) {
      alert(`Failed to execute action: ${error.message}`);
      logEntry.status = 'failed';
      logEntry.details += ` Error: ${error.message}`;
      await logsHelpers.addItem(logEntry);
      setRefreshTimeline(prev => prev + 1);
    }
  };

  // --- LOAD CONFIG ---
  useEffect(() => {
    if (props.config) return;

    const loadConfig = async () => {
      try {
        if (window.location.hash.includes('/configuration/')) {
          setConfig(WorkflowRulesConfig);
          setLoading(false);
          return;
        }

        let configModule;
        try {
          configModule = await import(`../components/Management/${holdingFolder}/${subFolder}/${componentName}`);
        } catch (e) {
          try {
            configModule = await import(`../components/Management/${holdingFolder}/${subFolder}/Details/${componentName}`);
          } catch (e2) { throw e; }
        }
        setConfig(configModule.default || configModule);

        try {
          const detailName = `${componentName}Details`;
          const detailModule = await import(`../components/Management/${holdingFolder}/${subFolder}/Details/${detailName}`);
          setDetailConfig(detailModule.default || detailModule);
          const mod = detailModule.default || detailModule;
          setDetailEntityName(mod.collectionName || mod.entityName);
        } catch (detailErr) { } // Ignore

        try {
          const { getConfig } = await import('../components/Management/configRegistry.js');
          let logicModule = getConfig(componentName);
          if (!logicModule && subFolder) {
            const disambiguatedName = `${subFolder.replace(/[^a-zA-Z0-9]/g, '')}_${componentName}`;
            logicModule = getConfig(disambiguatedName);
          }
          if (logicModule) setLogicConfig(logicModule);
        } catch (logicErr) { }

        // Load specific workflow config from relative Config folder
        if (holdingFolder !== 'Base') {
          try {
            const workflowConfigModule = await import(`../components/Management/${holdingFolder}/${subFolder}/Config/${componentName}Config`);
            const workflowConfig = workflowConfigModule.default || workflowConfigModule;

            if (workflowConfig) {
              setLogicConfig(prev => {
                const merged = {
                  ...(prev || {}),
                  stepsConfig: workflowConfig.stepsConfig || prev?.stepsConfig,
                  actionsConfig: workflowConfig.actionsConfig || prev?.actionsConfig,
                  modules: workflowConfig.modules || prev?.modules
                };

                // Inject generate_pdf action globally if missing
                if (merged.actionsConfig && !merged.actionsConfig.generate_pdf) {
                  merged.actionsConfig = {
                    ...merged.actionsConfig,
                    generate_pdf: {
                      label: 'Generate PDF',
                      type: 'secondary',
                      icon: 'PictureAsPdf',
                      actionType: 'pdf'
                    }
                  };
                }

                // Add generate_pdf to all steps if missing
                if (merged.stepsConfig?.steps) {
                  merged.stepsConfig = {
                    ...merged.stepsConfig,
                    steps: merged.stepsConfig.steps.map(step => ({
                      ...step,
                      actions: step.actions?.includes('generate_pdf')
                        ? step.actions
                        : [...(step.actions || []), 'generate_pdf']
                    }))
                  };
                }

                return merged;
              });
            }
          } catch (e) {
            // Config file may not exist, ignore
          }
        }

      } catch (err) {
        console.error('Error loading configuration:', err);
        setError('Configuration file not found.');
      }
    };

    if (holdingFolder && subFolder && componentName) loadConfig();
  }, [holdingFolder, subFolder, componentName, props.config]);

  // --- LOAD DATA ---
  useEffect(() => {
    const fetchData = async () => {
      if (!config) return;

      // Prevent unnecessary loading trigger if form is already initialized for the same ID
      // This is a safety check, but the dependency array fix is the primary solution.
      if (isEdit && formInitialized && itemData && itemData.id === idValue) {
        // We probably don't need to refetch everything if we are just typing
        // But let's rely on dependencies.
      } else {
        setLoading(true);
      }

      setError(null);

      // Instantiate helper locally to avoid dependency on external object reference
      const api = helpersWrapper(collectionName);

      try {
        if (isView || isEdit) {
          if (!idValue) { setError('Invalid URL: Missing Item ID'); setLoading(false); return; }

          const fetchPromise = api.fetchItemById(idValue);
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), 10000));
          const data = await Promise.race([fetchPromise, timeoutPromise]);

          if (!data) setError('Item not found.');
          setItemData(data);

          if (isEdit && !formInitialized) {
            setFormData(data || {});
            setFormInitialized(true);
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
        setError(`Error loading data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // Removed queryHelpers from dependencies, added collectionName
  }, [config, idValue, isView, isEdit, isCreate, collectionName, formInitialized]);

  // --- PAYMENT TERMS AUTO-CALCULATION ---
  const [lastProcessedTermId, setLastProcessedTermId] = useState(null);

  useEffect(() => {
    const handleTermChange = async () => {
      if (collectionName !== 'vendor_invoices' || !formData.payment_terms) return;

      // Prevent infinite loops or redundant fetches
      // logic: if term ID changed AND it's not the one we just processed
      if (formData.payment_terms === lastProcessedTermId) return;

      // Also prevent running on initial load if we want to respect existing dates?
      // Usually, if opening an existing invoice, we don't want to re-calculate unless the user *changes* the term.
      // But detecting "user change" vs "initial load" in this effect is tricky without a 'formDirty' flag or similar.
      // Simple heuristic: If formInitialized is true.
      // But formInitialized is true after load.
      // We can check if lastProcessedTermId is null (first run). If first run, we usually sync it.
      // Let's assume on Edit mode, we set the initial state.

      // BETTER APPROACH: Only run this logic if we have a way to know it's a change or if we are strict.
      // For now, let's just do it, but update lastProcessedTermId.

      // Caveat: On 'Edit' load, formData is populated. This effect fires.
      // It fetches term, calcs date. If date is different (e.g. user manually changed it previously), we overwrite it.
      // This might be annoying. 
      // Improvement: Only calc if due_date is empty OR if we track explicit change.
      // Given limitations, we'll implement it, but maybe check if due_date is empty for 'Create' mode?
      // For 'Edit' mode, we might want to skip the first run.

      if (isEdit && lastProcessedTermId === null) {
        // First run on edit, just sync state without overwrite
        setLastProcessedTermId(formData.payment_terms);
        return;
      }

      try {
        const termsApi = helpersWrapper('payment_terms');
        const term = await termsApi.fetchItemById(formData.payment_terms);

        if (term && (formData.invoice_date || formData.created_at)) {
          // Determine Base Date (Invoice Date preferred, else Today/Created)
          const baseDate = formData.invoice_date || new Date().toISOString();

          const newDueDate = TermCalculator.calculateDueDate(term, baseDate);
          const discountInfo = DiscountEngine.calculateDiscount(term.discount_rules, formData.total_amount || 0, baseDate);

          setFormData(prev => ({
            ...prev,
            due_date: TermCalculator.formatDate(newDueDate),
            early_payment_discount_date: discountInfo.expiryDate ? TermCalculator.formatDate(discountInfo.expiryDate) : prev.early_payment_discount_date,
            // If we want to auto-apply discount amount:
            // discount_amount: discountInfo.discountAmount || 0 
          }));
        }
      } catch (err) {
        console.warn("Failed to calculate term dates", err);
      } finally {
        setLastProcessedTermId(formData.payment_terms);
      }
    };

    if (formInitialized) {
      handleTermChange();
    }
  }, [formData.payment_terms, collectionName, formInitialized, isEdit]); // We only trigger on payment_terms change specifically



  // --- HANDLERS ---
  const handleFieldChange = (key, field) => (e) => {
    let val = e.target.value;
    if (field.type === 'checkbox') val = e.target.checked;
    else if (field.type === 'number') val = val === '' ? '' : Number(val);
    else if (field.type === 'date') val = fromDateTimeLocal(val);
    setFormData(prev => ({ ...prev, [key]: val }));
  };

  const handleSave = async () => {
    // Validation Check
    const missingFields = [];
    Object.entries(config.fieldsConfig).forEach(([key, field]) => {
      if (field.required) {
        const val = formData[key];
        // Check for empty string, null, or undefined (but allow 0)
        if (val === '' || val === null || val === undefined) {
          missingFields.push(t(field.label));
        }
      }
    });

    if (missingFields.length > 0) {
      alert(`${t('Please fill in required fields')}: ${missingFields.join(', ')}`);
      return;
    }

    // Duplicate Check (Vendor + Invoice Number)
    if (formData.invoice_number && formData.vendor_id) {
      try {
        const duplicates = await queryHelpers.fetchItems({
          invoice_number: formData.invoice_number,
          vendor_id: formData.vendor_id
        });

        // Filter out self (important for Edit mode)
        const realDuplicates = duplicates.filter(d => String(d.id) !== String(idValue));

        if (realDuplicates.length > 0) {
          alert(t('Duplicate invoice detected! This invoice number already exists for this vendor.'));
          return;
        }
      } catch (dupErr) {
        console.warn('Duplicate check failed', dupErr);
        // We typically allow saving if check fails to avoid being blocked by network error, 
        // but strictly we might want to block. For now, just log.
      }
    }

    setSaving(true);
    try {
      let payload = { ...formData };
      if (isEdit || isCreate) { delete payload.created_at; delete payload.updated_at; }
      payload = normalizeDatesForSave(payload, config.fieldsConfig);

      let savedId = idValue;
      if (isCreate) savedId = await queryHelpers.addItem(payload);
      else await queryHelpers.updateItem(idValue, payload);

      if (props.onClose) props.onClose();
      else navigate(isCreate ? `/${main}/${sub}/${entity}/view/${savedId}` : `/${main}/${sub}/${entity}/view/${idValue}`);
    } catch (e) {
      setError('Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this item?')) return;
    await queryHelpers.deleteItem(idValue);
    if (isDetail) { window.close(); return; }
    if (props.onClose) props.onClose();
    else navigate(-1);
  };



  const getStepActions = () => {
    if (!logicConfig?.stepsConfig || !itemData) return [];

    let currentStep = itemData.processing_step || logicConfig.stepsConfig.initialStep;

    // Attempt to find step definition
    let stepDef = logicConfig.stepsConfig.steps.find(s => s.name === currentStep);

    // Fallback: If current step matches nothing (e.g. data corruption or '1'), use initial step
    if (!stepDef) {
      console.warn(`Step "${currentStep}" not found in config. Falling back to initial step.`);
      currentStep = logicConfig.stepsConfig.initialStep;
      stepDef = logicConfig.stepsConfig.steps.find(s => s.name === currentStep);
    }

    return stepDef?.actions || [];
  };

  if (loading) return <Box p={4} display="flex" justifyContent="center"><CircularProgress /></Box>;
  if (!config) return <Typography>Config not found.</Typography>;

  return (
    <Container maxWidth="lg" sx={{ pt: 3, pb: 10, width: '100%', overflowX: 'hidden' }}>
      <Fade in={true} timeout={500}>
        <Box>
          {/* HEADER AREA */}
          <Box display="flex" alignItems="center" mb={4}>
            {!props.onClose && (
              <IconButton onClick={() => navigate(-1)} sx={{ mr: 2, border: '1px solid', borderColor: 'divider', borderRadius: 0 }}>
                <ArrowBackIosNew fontSize="small" />
              </IconButton>
            )}
            <Box>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.2em' }}>
                {breadcrumb.main} / {breadcrumb.sub}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: -1 }}>
                {t(componentName)}
              </Typography>
            </Box>
            <Box flexGrow={1} />

            {/* STATUS TAG */}
            {(isView && (itemData?.processing_step || logicConfig?.stepsConfig?.initialStep)) && (
              <StatusPill label={itemData?.processing_step || logicConfig?.stepsConfig?.initialStep || 'DRAFT'} />
            )}

            {props.onClose && (
              <IconButton onClick={props.onClose} sx={{ borderRadius: 0 }}><Close /></IconButton>
            )}
          </Box>


          {/* VIEW MODE: STACK LAYOUT */}
          {isView ? (
            <Box display="flex" flexDirection="column" gap={4}>

              {/* 1. WORKFLOW ACTIONS (Top, Clean Box) */}
              {logicConfig && getStepActions().length > 0 && (
                <Box mb={2}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', mb: 2, color: 'text.secondary' }}>
                    Workflow Actions
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    {getStepActions().map(actionName => {
                      const def = logicConfig.actionsConfig[actionName];
                      if (!def) return null;

                      // AUTHORIZATION CHECK: Filter actions by user permissions
                      const authorizedActions = getAuthorizedActions(
                        logicConfig.actionsConfig,
                        collectionName,
                        idValue,
                        itemData?.processing_step
                      );

                      // Skip if user is not authorized for this action
                      if (!authorizedActions[actionName]) {
                        return null;
                      }

                      const Icon = ICON_MAP[def.icon] || CheckCircle;
                      return (
                        <ActionButton
                          key={actionName}
                          icon={Icon}
                          label={t(def.label)}
                          onClick={() => handleAction(actionName)}
                          color={def.type === 'error' ? 'error' : def.type === 'success' ? 'success' : 'primary'}
                        />
                      );
                    })}
                  </Box>
                </Box>
              )}

              {/* 1.5. RELATED MODULES ACTIONS */}
              {logicConfig?.modules?.some(m => m.type === 'Specific') && (
                <Box mb={2}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', mb: 2, color: 'text.secondary' }}>
                    Related Modules
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    {logicConfig.modules.filter(m => m.type === 'Specific').map((mod, idx) => {
                      const Icon = ICON_MAP[mod.icon] || CheckCircle;
                      return (
                        <Button
                          key={idx}
                          variant="outlined"
                          startIcon={<Icon />}
                          onClick={() => {
                            const path = mod.path.replace(':id', idValue);
                            navigate(path);
                          }}
                          sx={{
                            borderWidth: '1px',
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                            px: 2, py: 1.5,
                            '&:hover': { bgcolor: 'secondary.light', borderColor: 'secondary.main', color: 'secondary.contrastText' }
                          }}
                        >
                          {t(mod.name)}
                        </Button>
                      )
                    })}
                  </Box>
                </Box>
              )}

              {/* 2. FORM FIELDS */}
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <SectionHeader title={t("Information")} />
                  <Grid container spacing={3}>
                    {Object.keys(config.fieldsConfig).filter(k => k !== 'created_at' && k !== 'updated_at').map(key => {
                      const field = config.fieldsConfig[key];
                      return (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                          <FieldDisplay label={t(field.label)} value={String(itemData?.[key] || '')} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </CardContent>
              </Card>

              {/* PAYMENT TERMS EXTRA PANEL */}
              {collectionName === 'payment_terms' && itemData && (
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <PaymentTermsExtraPanel
                      data={itemData}
                      onChange={(updatedData) => {
                        setItemData(updatedData);
                        // Optionally auto-save or mark as dirty
                      }}
                    />
                  </CardContent>
                </Card>
              )}

              {/* CREDITORS LEDGER - VENDOR STATEMENT */}
              {collectionName === 'creditors_ledger' && itemData && (
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <SectionHeader title={t("Vendor Statement")} />
                    <VendorStatement
                      items={[itemData]}
                      vendors={[{ id: itemData.vendor_id, name: itemData.creditor_name }]}
                    />
                  </CardContent>
                </Card>
              )}

              {/* 3. COMMENTS */}
              <CommentsSection
                entityId={idValue}
                entityType={collectionName}
              />

              {/* 3.5. DOCUMENTS */}
              {!isCreate && (
                <DocumentManager
                  entityType={collectionName}
                  entityId={idValue}
                />
              )}

              {/* 4. DETAILS COMPONENT */}
              {detailConfig && (
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <SectionHeader title={t("Related Details")} />
                    <BaseManagementComponent
                      fetchItems={async () => {
                        const wrapper = helpersWrapper(detailEntityName || `${entity}_details`);
                        const all = await wrapper.fetchItems();
                        return all.filter(r => r.parent_id === idValue);
                      }}
                      addItem={async (row) => {
                        const wrapper = helpersWrapper(detailEntityName);
                        return wrapper.addItem({ ...row, parent_id: idValue });
                      }}
                      deleteItem={async (itemId) => helpersWrapper(detailEntityName).deleteItem(itemId)}
                      updateItem={async (itemId, row) => helpersWrapper(detailEntityName).updateItem(itemId, row)}
                      fieldConfig={detailConfig.fieldsConfig}
                      entityName={detailEntityName}
                      onViewItem={(itemId) => {
                        const parentBaseUrl = keyToLinkMap[rawEntity] || `/${main}/${sub}/${rawEntity}`;
                        window.open(`/#${parentBaseUrl}/details/view/${itemId}`, '_blank');
                      }}
                      onEditItem={(itemId) => {
                        const parentBaseUrl = keyToLinkMap[rawEntity] || `/${main}/${sub}/${rawEntity}`;
                        window.open(`/#${parentBaseUrl}/details/edit/${itemId}`, '_blank');
                      }}
                      onAdd={() => {
                        const parentBaseUrl = keyToLinkMap[rawEntity] || `/${main}/${sub}/${rawEntity}`;
                        window.open(`/#${parentBaseUrl}/details/create`, '_blank');
                      }}
                      onConfigure={() => {
                        const parentBaseUrl = keyToLinkMap[rawEntity] || `/${main}/${sub}/${rawEntity}`;
                        window.open(`/#${parentBaseUrl}/configuration`, '_blank');
                      }}
                    />
                  </CardContent>
                </Card>
              )}

              {/* 5. HISTORY (TIMELINE) */}
              <Box>
                <SectionHeader title={t("History")} />
                <ActionTimeline key={refreshTimeline} entityId={idValue} entityType={collectionName} />
              </Box>

            </Box>
          ) : (
            // EDIT/CREATE FORM
            <Card>
              <CardContent sx={{ p: 5 }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>
                  {isCreate ? t('Create New Item') : t('Edit Item')}
                </Typography>

                {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

                <Grid container spacing={3}>
                  {Object.keys(config.fieldsConfig).filter(k => k !== 'created_at' && k !== 'updated_at').map(key => {
                    const field = config.fieldsConfig[key];
                    return (
                      <Grid item xs={12} sm={6} key={key}>
                        <TextField
                          fullWidth
                          label={t(field.label)}
                          type={field.type === 'number' ? 'number' : field.type === 'date' ? 'datetime-local' : 'text'}
                          select={field.type === 'select'}
                          value={field.type === 'checkbox' ? undefined : (formData[key] ?? '')}
                          InputLabelProps={{ shrink: true }}
                          onChange={handleFieldChange(key, field)}
                          multiline={field.multiline}
                          rows={field.rows}
                        >
                          {field.type === 'select' && field.options?.map(o => (
                            <MenuItem key={o.id} value={o.id}>{o.label}</MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    );
                  })}
                </Grid>

                {/* PAYMENT TERMS EXTRA PANEL FOR EDIT/CREATE */}
                {collectionName === 'payment_terms' && (
                  <Box mt={4}>
                    <PaymentTermsExtraPanel
                      data={formData}
                      onChange={(updatedData) => setFormData(updatedData)}
                    />
                  </Box>
                )}

                <Box mt={5} display="flex" justifyContent="flex-end" gap={2}>
                  <Button variant="outlined" onClick={() => props.onClose ? props.onClose() : navigate(-1)} size="large">
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleSave} disabled={saving} size="large" sx={{ px: 4 }}>
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          )}

          {/* NESTED DIALOG */}
          <Dialog open={!!nestedItem} onClose={() => setNestedItem(null)} maxWidth="lg" fullWidth>
            <DialogContent>
              {nestedItem && (
                <Visualizer
                  config={nestedItem.config}
                  entity={nestedItem.entity}
                  id={nestedItem.id}
                  mode={nestedItem.mode}
                  onClose={() => setNestedItem(null)}
                />
              )}
            </DialogContent>
          </Dialog>

        </Box>
      </Fade>
    </Container >
  );
};

export default Visualizer;
