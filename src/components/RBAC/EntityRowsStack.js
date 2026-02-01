
export const fieldsConfig = {
    stack_id: { label: 'Stack ID', type: 'number', faker: 'datatype.number', min: 1, max: 10000 },
    stack_name: { label: 'Stack Name', type: 'text', faker: 'lorem.words' },
    entity_type: { label: 'Entity Type', type: 'text', faker: 'lorem.word' },
    entity_row_id: { label: 'Entity Row ID', type: 'number', faker: 'datatype.number', min: 1, max: 100000 },
};

export const entityName = 'Entity Rows Stack';
export const collectionName = 'entity_rows_stack';
