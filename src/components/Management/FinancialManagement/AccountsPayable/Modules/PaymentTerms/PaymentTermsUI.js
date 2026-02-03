
import React from 'react';
import { Grid, Typography, Divider, Box } from '@mui/material';
import TermRuleEditor from './TermRuleEditor';
import { TermTestBench } from './TermTestBench';

// This component acts as an extension/plugin to the Generic Visualizer 
// OR as a standalone if we route directly to it. 
// Assuming Visualizer concept: We might export a 'CustomRenderers' map or 'ExtraFields'.

// However, primarily, we can export a component that takes 'data' and 'onChange'.
// Since the 'fieldsConfig' in PaymentTerms.js defines 'discount_rules' as type 'json',
// The generic Visualizer might not know how to render it well.
// We will assume the Visualizer allows overriding field rendering or we simply use this as a bottom-section.

export const PaymentTermsExtraPanel = ({ data, onChange }) => {
  // Wrapper to update JSON fields safely
  const handleRuleChange = (field, newVal) => {
    onChange({ ...data, [field]: newVal });
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Divider sx={{ mb: 2 }}>Advanced Configuration</Divider>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TermRuleEditor
            type="discount"
            value={data.discount_rules}
            onChange={(val) => handleRuleChange('discount_rules', val)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TermRuleEditor
            type="installment"
            value={data.installment_plan}
            onChange={(val) => handleRuleChange('installment_plan', val)}
          />
        </Grid>
      </Grid>

      {/* Test Bench - Read Only Simulation */}
      <TermTestBench termConfig={data} />
    </Box>
  );
};
