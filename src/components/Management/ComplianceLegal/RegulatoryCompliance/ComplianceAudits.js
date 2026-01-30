
export const fieldsConfig = {
    audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    audit_type: { label: 'Audit Type', type: 'text', faker: 'hacker.noun' }, // e.g. GDPR, ISO
    auditor: { label: 'Auditor', type: 'text', faker: 'company.name' },

    audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    score: { label: 'Score', type: 'number', faker: 'datatype.number' },
    findings_count: { label: 'Findings Count', type: 'number', faker: 'datatype.number' },
    report_url: { label: 'Report URL', type: 'text', faker: 'internet.url' },
    status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'completed', label: 'Completed' }, { id: 'failed', label: 'Failed' }], faker: 'random.arrayElement' }
};

export const entityName = 'Compliance Audits';
export const collectionName = 'compliance_audits';
