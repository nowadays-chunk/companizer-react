
export const fieldsConfig = {
    activity_id: { label: 'Activity ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    activity_name: { label: 'Activity', type: 'text', faker: 'lorem.words' },
    type: { label: 'Type', type: 'select', options: [{ id: 'donation', label: 'Donation' }, { id: 'fundraiser', label: 'Fundraiser' }, { id: 'sponsorship', label: 'Sponsorship' }], faker: 'random.arrayElement' },

    amount_raised: { label: 'Amount Raised', type: 'number', faker: 'finance.amount' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    beneficiary: { label: 'Beneficiary', type: 'text', faker: 'company.name' },
    date: { label: 'Date', type: 'date', faker: 'date.recent' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
    organized_by: { label: 'Organized By', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Philanthropic Activities';
export const collectionName = 'philanthropic_activities';
