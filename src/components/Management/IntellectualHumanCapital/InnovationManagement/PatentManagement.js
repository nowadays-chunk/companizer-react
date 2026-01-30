
export const fieldsConfig = {
  patent_id: { label: 'Patent ID', type: 'text', faker: 'datatype.uuid' },
  innovation_id: { label: 'Innovation ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.words' },
  filling_number: { label: 'Filing Number', type: 'text', faker: 'finance.cod' },

  filing_date: { label: 'Filing Date', type: 'date', faker: 'date.past' },
  status: { label: 'Status', type: 'select', options: [{ id: 'filed', label: 'Filed' }, { id: 'pending_examination', label: 'Pending Examination' }, { id: 'granted', label: 'Granted' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  inventors: { label: 'Inventors', type: 'text', faker: 'name.fullName' },
  jurisdiction: { label: 'Jurisdiction', type: 'text', faker: 'address.country' },
  expiration_date: { label: 'Expiration Date', type: 'date', faker: 'date.future' },
  attorney_contact: { label: 'Attorney Contact', type: 'text', faker: 'name.fullName' },
  cost_incurred: { label: 'Cost Incurred', type: 'number', faker: 'finance.amount' },
  abstract: { label: 'Abstract', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Patent Management';
export const collectionName = 'patent_management_ihc';
