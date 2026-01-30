
export const fieldsConfig = {
    license_id: { label: 'License ID', type: 'text', faker: 'datatype.uuid' },
    ip_id: { label: 'IP ID', type: 'text', faker: 'datatype.uuid' }, // Intellectual Property
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    licensee: { label: 'Licensee', type: 'text', faker: 'company.name' },
    licensor: { label: 'Licensor', type: 'text', faker: 'company.name' },

    start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
    end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

    royalty_rate: { label: 'Royalty Rate (%)', type: 'number', faker: 'datatype.float' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    territory: { label: 'Territory', type: 'text', faker: 'address.country' },
    exclusivity: { label: 'Exclusivity', type: 'checkbox', faker: 'datatype.boolean' },
    annual_minimum: { label: 'Annual Minimum', type: 'number', faker: 'finance.amount' },
    currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },
    status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }, { id: 'terminated', label: 'Terminated' }], faker: 'random.arrayElement' },
    agreement_url: { label: 'Agreement URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Licensing Agreements';
export const collectionName = 'licensing_agreements';
