export const fieldsConfig = {
  invoiceId: {
    label: 'Invoice ID',
    type: 'text',
    faker: 'datatype.uuid',
  },
  providerDetails: {
    label: 'Provider Details',
    type: 'text',
    faker: 'company.name',
  },
  providerInvoiceNumber: {
    label: 'Provider Invoice Number',
    type: 'text',
    faker: 'datatype.uuid',
  },
  issuedAt: {
    label: 'Issued At',
    type: 'date',
    faker: 'date.past',
  },
  receivedAt: {
    label: 'Received At',
    type: 'date',
    faker: 'date.past',
  },
  serviceProductDescription: {
    label: 'Service/Product Description',
    type: 'text',
    faker: 'commerce.productDescription',
  },

  // NUMERIC FIELDS WITH LIMITS
  quantity: {
    label: 'Quantity',
    type: 'number',
    faker: 'datatype.number',
    min: 1,
    max: 1000,
  },
  unitPrice: {
    label: 'Unit Price',
    type: 'number',
    faker: 'finance.amount',
    min: 1,
    max: 100000,
    decimals: 2,
  },
  totalAmountExclVAT: {
    label: 'Total Amount (Excl. VAT)',
    type: 'number',
    faker: 'finance.amount',
    min: 1,
    max: 1000000,
    decimals: 2,
  },
  vatRate: {
    label: 'VAT Rate',
    type: 'number',
    faker: 'datatype.float',
    min: 0,
    max: 30,      // e.g. 0–30% VAT
    decimals: 2,
  },
  vatAmount: {
    label: 'VAT Amount',
    type: 'number',
    faker: 'finance.amount',
    min: 0,
    max: 300000,
    decimals: 2,
  },
  totalAmountInclVAT: {
    label: 'Total Amount (Incl. VAT)',
    type: 'number',
    faker: 'finance.amount',
    min: 1,
    max: 1200000,
    decimals: 2,
  },
  discountRate: {
    label: 'Discount Rate',
    type: 'number',
    faker: 'datatype.float',
    min: 0,
    max: 100,
    decimals: 2,
  },
  ecoContribution: {
    label: 'Eco Contribution',
    type: 'number',
    faker: 'finance.amount',
    min: 0,
    max: 10000,
    decimals: 2,
  },
  latePaymentFee: {
    label: 'Late Payment Fee',
    type: 'number',
    faker: 'finance.amount',
    min: 0,
    max: 5000,
    decimals: 2,
  },

  paymentTerms: {
    label: 'Payment Terms',
    type: 'text',
    faker: 'finance.transactionType',
  },
  preferredCurrency: {
    label: 'Preferred Currency',
    type: 'text',
    faker: 'finance.currencyCode',
  },
  vendorCode: {
    label: 'Vendor Code',
    type: 'text',
    faker: 'datatype.uuid',
  },
  taxExemptionStatus: {
    label: 'Tax Exemption Status',
    type: 'text',
    faker: 'random.word',
  },
  dueDate: {
    label: 'Due Date',
    type: 'date',
    faker: 'date.future',
  },
  notes: {
    label: 'Notes',
    type: 'text',
    multiline: true,
    rows: 4,
    faker: 'lorem.paragraph',
  },
  tags: {
    label: 'Tags',
    type: 'select',
    options: [
      { id: 'urgent', label: 'Urgent' },
      { id: 'review', label: 'Review' },
      { id: 'important', label: 'Important' },
      { id: 'completed', label: 'Completed' },
      { id: 'follow-up', label: 'Follow-Up' },
    ],
    multiple: true,
    faker: 'random.arrayElement',
  },
};

export const entityName = 'Vendor Invoices';
export const collectionName = 'vendor-invoices';
