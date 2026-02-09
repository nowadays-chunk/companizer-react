export const fieldsConfig = {
    segment_name: { label: 'Segment Name', type: 'text' },
    length: { label: 'Length', type: 'number' },
    type: { label: 'Type', type: 'select', options: [{ id: 'alphanumeric', label: 'Alphanumeric' }, { id: 'numeric', label: 'Numeric' }] },
    required: { label: 'Required', type: 'checkbox' },
    separator: { label: 'Separator', type: 'text' }
};

export const collectionName = 'coa_segments';
export const entityName = 'Segment Configuration';
