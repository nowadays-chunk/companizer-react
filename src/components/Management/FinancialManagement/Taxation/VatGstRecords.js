
export const fieldsConfig = {
  record_id: { label: 'Record ID', type: 'text', faker: 'datatype.uuid' },
  transaction_id: { label: 'Transaction ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  tax_type: { label: 'Tax Type', type: 'select', options: [{ id: 'vat', label: 'VAT' }, { id: 'gst', label: 'GST' }, { id: 'sales_tax', label: 'Sales Tax' }], faker: 'random.arrayElement' },
  rate: { label: 'Rate (%)', type: 'number', faker: 'datatype.float' },

  tax_amount: { label: 'Tax Amount', type: 'number', faker: 'finance.amount' },
  net_amount: { label: 'Net Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  transaction_date: { label: 'Transaction Date', type: 'date', faker: 'date.recent' },
  is_input_tax: { label: 'Is Input Tax', type: 'checkbox', faker: 'datatype.boolean' }, // Input (Purchase) vs Output (Sale)
  jurisdiction: { label: 'Jurisdiction', type: 'text', faker: 'address.country' },
  filing_period: { label: 'Filing Period', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'VAT/GST Records';
export const collectionName = 'vat_gst_records';
