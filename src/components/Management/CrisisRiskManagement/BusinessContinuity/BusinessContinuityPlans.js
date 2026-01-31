
export const fieldsConfig = {

  plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  plan_name: { label: 'Plan Name', type: 'text', faker: 'lorem.words' },
  scope: { label: 'Scope', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  critical_functions: { label: 'Critical Functions', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  rto_hours: { label: 'RTO (Hours)', type: 'number', faker: 'datatype.number' }, // Recovery Time Objective
  rpo_hours: { label: 'RPO (Hours)', type: 'number', faker: 'datatype.number' }, // Recovery Point Objective

  // Mandated
  // Extras
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  last_tested_date: { label: 'Last Tested Date', type: 'date', faker: 'date.past' },
  test_result: { label: 'Test Result', type: 'select', options: [{ id: 'pass', label: 'Pass' }, { id: 'fail', label: 'Fail' }, { id: 'partial', label: 'Partial' }], faker: 'random.arrayElement' },
  next_review_date: { label: 'Next Review Date', type: 'date', faker: 'date.future' },
  activation_procedures_url: { label: 'Activation Procedures URL', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Business Continuity Plans';
export const collectionName = 'business_continuity_plans';
