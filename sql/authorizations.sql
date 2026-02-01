-- Authorizations Table
-- Fine-grained permission grants for users with time and workflow bounds

CREATE TABLE IF NOT EXISTS authorizations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    
    -- Who grants and who receives
    accountable_id BIGINT UNSIGNED NOT NULL COMMENT 'User who created this authorization',
    authorized_user_id BIGINT UNSIGNED NOT NULL COMMENT 'User receiving the authorization',
    
    -- What is authorized
    authorized_role VARCHAR(50) NULL COMMENT 'Role granted (super_admin, admin, manager, etc)',
    authorized_entity VARCHAR(191) NULL COMMENT 'Specific entity type authorized',
    authorized_page VARCHAR(191) NULL COMMENT 'Page/route authorized',
    authorized_actions JSON NULL COMMENT 'Array of actions: ["view","create","edit","delete","validate","approve"]',
    
    -- Specific entity row(s) authorization
    entity_type VARCHAR(191) NULL COMMENT 'Collection name (e.g., cash_flow_forecasts)',
    entity_row_id BIGINT UNSIGNED NULL COMMENT 'Specific row ID if single-row authorization',
    entity_rows_stack_id BIGINT UNSIGNED NULL COMMENT 'Stack ID for bulk row authorization',
    entity_row_processing_step VARCHAR(50) NULL COMMENT 'Workflow step restriction - auth invalid after this step',
    
    -- Time and operation bounds
    authorization_start_date DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    authorization_end_date DATETIME(6) NULL COMMENT 'Optional expiry date',
    authorization_end_operation VARCHAR(50) NULL COMMENT 'Operation that invalidates auth (e.g., "validated", "approved")',
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    notes TEXT NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
    
    INDEX idx_auth_user (authorized_user_id),
    INDEX idx_auth_entity (entity_type, entity_row_id),
    INDEX idx_auth_stack (entity_rows_stack_id),
    INDEX idx_auth_active (is_active, authorization_end_date),
    
    CONSTRAINT fk_auth_accountable FOREIGN KEY (accountable_id)
        REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_auth_user FOREIGN KEY (authorized_user_id)
        REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
