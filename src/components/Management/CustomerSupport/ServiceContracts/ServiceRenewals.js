
export const fieldsConfig = {
    renewal_id: { label: 'Renewal ID', type: 'text', faker: 'datatype.uuid' },
    contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    current_expiry_date: { label: 'Current Expiry Date', type: 'date', faker: 'date.future' },
    renewal_date: { label: 'Renewal Date', type: 'date', faker: 'date.future' },

    renewal_cost: { label: 'Renewal Cost', type: 'number', faker: 'finance.amount' },
    currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

    status: { label: 'Status', type: 'select', options: [{ id: 'upcoming', label: 'Upcoming' }, { id: 'processed', label: 'Processed' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    customer_contact_id: { label: 'Customer Contact ID', type: 'text', faker: 'datatype.uuid' },
    reminder_sent: { label: 'Reminder Sent', type: 'checkbox', faker: 'datatype.boolean' },
    auto_renew: { label: 'Auto Renew', type: 'checkbox', faker: 'datatype.boolean' },
    term_extension_months: { label: 'Term Extension (Months)', type: 'number', faker: 'datatype.number' },
    discount_applied: { label: 'Discount Applied', type: 'number', faker: 'finance.amount' },
    sales_rep_id: { label: 'Sales Rep ID', type: 'text', faker: 'datatype.uuid' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Service Renewals';
export const collectionName = 'service_renewals';
