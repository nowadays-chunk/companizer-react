
export const fieldsConfig = {

  agreement_id: { label: 'Agreement ID', type: 'text', faker: 'datatype.uuid' },
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  agreement_type: { label: 'Type', type: 'select', options: [{ id: 'transport', label: 'Transport' }, { id: 'warehousing', label: 'Warehousing' }, { id: 'freight', label: 'Freight' }], faker: 'random.arrayElement' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  rates_agreed: { label: 'Rates Agreed', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }, { id: 'terminated', label: 'Terminated' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Partner Agreements';
export const collectionName = 'partner_agreements';
