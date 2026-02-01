
export const fieldsConfig = {
    name: { label: 'Organization Name', type: 'text', faker: 'company.name' },
    domain: { label: 'Domain', type: 'text', faker: 'internet.domainName' },
    email: { label: 'Email', type: 'text', faker: 'internet.email' },
    num_users: { label: 'Number of Users', type: 'number', faker: 'datatype.number', min: 0, max: 10000 },
    num_stores: { label: 'Number of Stores', type: 'number', faker: 'datatype.number', min: 0, max: 1000 },
    price: { label: 'Subscription Price', type: 'number', faker: 'finance.amount', min: 0, max: 100000, decimals: 2 },
    tenant_id: { label: 'Tenant ID', type: 'text', faker: 'datatype.uuid' },
};

export const entityName = 'Organizations';
export const collectionName = 'organizations';
