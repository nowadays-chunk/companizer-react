
export const collectionName = 'entity_workflow_rules';

export const fieldsConfig = {
    entity_type: {
        label: 'Entity Type',
        type: 'text',
        // e.g. 'vendor_invoices'
    },
    current_step: {
        label: 'Current Step',
        type: 'text'
        // e.g. 'draft'
    },
    action_name: {
        label: 'Action Name',
        type: 'text'
        // e.g. 'submit'
    },
    rule_type: {
        label: 'Rule Type',
        type: 'select',
        options: [
            { id: 'required_field', label: 'Required Field' },
            { id: 'value_equals', label: 'Column Equals' },
            { id: 'value_less_than', label: 'Value Less Than' },
            { id: 'value_greater_than', label: 'Value Greater Than' },
            { id: 'value_between', label: 'Value Between (e.g. 10,100)' },
            { id: 'approval_email', label: 'Approval Necessary (Specific Email)' },
            { id: 'approval_manager', label: 'Approval Necessary (Manager)' },
            { id: 'approval_client', label: 'Approval Necessary (Client)' },
            { id: 'approval_coworker', label: 'Approval Necessary (Coworker)' },
            { id: 'custom_sql', label: 'Custom SQL Condition' }
        ]
    },
    rule_value: {
        label: 'Rule Value / Condition',
        type: 'text'
        // e.g. 'invoice_number' (for required field) 
        // or 'total_amount < 5000' (for threshold)
    },
    error_message: {
        label: 'Error Message',
        type: 'text'
    },
    is_active: {
        label: 'Is Active',
        type: 'checkbox'
    }
};
