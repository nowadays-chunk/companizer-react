-- Entity Rows Stack Table
-- Groups multiple entity rows for bulk authorization assignment

CREATE TABLE IF NOT EXISTS entity_rows_stack (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    stack_id BIGINT UNSIGNED NOT NULL COMMENT 'Common ID grouping multiple rows',
    stack_name VARCHAR(191) NULL COMMENT 'Descriptive name for the stack',
    entity_type VARCHAR(191) NOT NULL COMMENT 'Collection name (e.g., vendor_invoices)',
    entity_row_id BIGINT UNSIGNED NOT NULL COMMENT 'ID of the entity row',
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    
    INDEX idx_stack (stack_id),
    INDEX idx_entity_row (entity_type, entity_row_id),
    INDEX idx_stack_entity (stack_id, entity_type),
    
    UNIQUE KEY unique_stack_row (stack_id, entity_type, entity_row_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
