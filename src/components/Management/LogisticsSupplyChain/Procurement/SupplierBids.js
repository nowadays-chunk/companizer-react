
export const fieldsConfig = {
  bid_id: { label: 'Bid ID', type: 'text', faker: 'datatype.uuid' },
  rfp_id: { label: 'RFP ID', type: 'text', faker: 'datatype.uuid' }, // Request for Proposal
  supplier_id: { label: 'Supplier ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  bid_amount: { label: 'Bid Amount', type: 'number', faker: 'finance.amount' },
  submission_date: { label: 'Submission Date', type: 'date', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  delivery_time_days: { label: 'Delivery Time (Days)', type: 'number', faker: 'datatype.number' },
  proposal_url: { label: 'Proposal URL', type: 'text', faker: 'internet.url' },
  status: { label: 'Status', type: 'select', options: [{ id: 'received', label: 'Received' }, { id: 'shortlisted', label: 'Shortlisted' }, { id: 'selected', label: 'Selected' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  score: { label: 'Score', type: 'number', faker: 'datatype.number' } // Evaluation score
};

export const entityName = 'Supplier Bids';
export const collectionName = 'supplier_bids';
