-- Add Versioning Fields to All Entity Tables
-- This script adds version control fields to support entity row versioning

-- Template for adding versioning fields to any entity table
-- Replace {table_name} with actual table name

-- Example for vendor_invoices:
ALTER TABLE vendor_invoices 
ADD COLUMN version_number INT DEFAULT 1 COMMENT 'Version number starting from 1',
ADD COLUMN version_date DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) COMMENT 'When this version was created',
ADD COLUMN version_author_id BIGINT UNSIGNED NULL COMMENT 'User who created this version',
ADD COLUMN is_current_version BOOLEAN DEFAULT TRUE COMMENT 'Whether this is the active version',
ADD COLUMN is_versioned BOOLEAN DEFAULT FALSE COMMENT 'Whether versioning is enabled for this row',
ADD COLUMN original_row_id BIGINT UNSIGNED NULL COMMENT 'ID of the first version in the chain';

ALTER TABLE vendor_invoices
ADD INDEX idx_version (version_number),
ADD INDEX idx_current_version (is_current_version),
ADD INDEX idx_original_row (original_row_id),
ADD INDEX idx_versioned (is_versioned);

ALTER TABLE vendor_invoices
ADD CONSTRAINT fk_vendor_invoices_version_author 
    FOREIGN KEY (version_author_id) REFERENCES users(id) ON DELETE SET NULL;

-- Repeat for other entity tables:
-- customer_invoices, cash_flow_forecasts, employees_list, tasks, etc.

-- Note: Run this script carefully, one table at a time
-- Test thoroughly before applying to production

/*
Universal template:

ALTER TABLE {table_name} 
ADD COLUMN version_number INT DEFAULT 1,
ADD COLUMN version_date DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
ADD COLUMN version_author_id BIGINT UNSIGNED NULL,
ADD COLUMN is_current_version BOOLEAN DEFAULT TRUE,
ADD COLUMN is_versioned BOOLEAN DEFAULT FALSE,
ADD COLUMN original_row_id BIGINT UNSIGNED NULL;

ALTER TABLE {table_name}
ADD INDEX idx_version (version_number),
ADD INDEX idx_current_version (is_current_version),
ADD INDEX idx_original_row (original_row_id);

ALTER TABLE {table_name}
ADD CONSTRAINT fk_{table_name}_version_author 
    FOREIGN KEY (version_author_id) REFERENCES users(id) ON DELETE SET NULL;
*/
