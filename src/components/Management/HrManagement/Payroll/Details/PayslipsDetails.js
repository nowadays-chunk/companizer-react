
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    payslip_id: { label: 'Payslip ID', type: 'text', faker: 'datatype.uuid' }, // FK parent

    description: { label: 'Description', type: 'text', faker: 'lorem.words' }, // e.g. "Basic Salary", "Tax", "Health Insurance"
    amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },
    type: { label: 'Type', type: 'select', options: [{ id: 'earning', label: 'Earning' }, { id: 'deduction', label: 'Deduction' }], faker: 'random.arrayElement' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Extras
    rate: { label: 'Rate', type: 'number', faker: 'finance.amount' },
    units: { label: 'Units', type: 'number', faker: 'datatype.float' }, // Hours or Days
    year_to_date_amount: { label: 'YTD Amount', type: 'number', faker: 'finance.amount' },
    taxable: { label: 'Taxable', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Payslip Lines';
export const collectionName = 'payslip_lines';
