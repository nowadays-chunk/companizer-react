
export const fieldsConfig = {
  prediction_id: { label: 'Prediction ID', type: 'text', faker: 'datatype.uuid' },
  model_id: { label: 'Model ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  prediction_target: { label: 'Prediction Target', type: 'text', faker: 'lorem.words' }, // e.g. Sales Q3
  predicted_value: { label: 'Predicted Value', type: 'number', faker: 'datatype.float' },
  confidence_score: { label: 'Confidence Score', type: 'number', faker: 'datatype.float' },

  prediction_date: { label: 'Prediction Date', type: 'date', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  model_version: { label: 'Model Version', type: 'text', faker: 'system.semver' },
  input_parameters: { label: 'Input Parameters', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  actual_value: { label: 'Actual Value', type: 'number', faker: 'datatype.float' }, // For backtesting
  accuracy: { label: 'Accuracy', type: 'number', faker: 'datatype.float' },
  analyst_comments: { label: 'Analyst Comments', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Predictive Analytics';
export const collectionName = 'predictive_analytics';