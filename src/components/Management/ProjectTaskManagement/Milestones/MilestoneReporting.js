
export const fieldsConfig = {
  report_id: { label: 'Report ID', type: 'text', faker: 'datatype.uuid' },
  milestone_id: { label: 'Milestone ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  report_date: { label: 'Report Date', type: 'date', faker: 'date.recent' },
  progress_percentage: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' },

  status_indicator: { label: 'Status Indicator', type: 'select', options: [{ id: 'green', label: 'Green' }, { id: 'yellow', label: 'Yellow' }, { id: 'red', label: 'Red' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  reported_by: { label: 'Reported By', type: 'text', faker: 'name.fullName' },
  risks_identified: { label: 'Risks Identified', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  mitigation_plan: { label: 'Mitigation Plan', type: 'text', faker: 'lorem.sentence' },
  estimated_completion: { label: 'Estimated Completion', type: 'date', faker: 'date.future' },
  blockers: { label: 'Blockers', type: 'text', faker: 'lorem.sentence' },
  budget_consumed: { label: 'Budget Consumed', type: 'number', faker: 'finance.amount' },
  files_attached: { label: 'Files Attached', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Milestone Reporting';
export const collectionName = 'milestone_reporting';
