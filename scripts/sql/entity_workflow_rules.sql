CREATE TABLE IF NOT EXISTS entity_workflow_rules (
    id VARCHAR(36) PRIMARY KEY,
    collection_name VARCHAR(255) NOT NULL,
    criteria_name VARCHAR(255) NOT NULL, -- Field name in fieldsConfig
    criteria_condition VARCHAR(50), -- e.g., 'equals', '>', 'contains'
    criteria_value TEXT,
    action_role VARCHAR(100), -- 'email_notification', 'add_tag', 'validation_error'
    action_payload JSON, -- JSON content for the action (template IDs, tag names, etc.)
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_collection_criteria (collection_name, criteria_name)
);
