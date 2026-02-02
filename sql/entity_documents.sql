-- Entity Documents Table
-- Stores metadata for files attached to any entity

CREATE TABLE entity_documents (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  entity_type VARCHAR(100) NOT NULL COMMENT 'Table name of the entity',
  entity_id BIGINT UNSIGNED NOT NULL COMMENT 'ID of the entity record',
  filename VARCHAR(255) NOT NULL COMMENT 'Stored filename',
  original_filename VARCHAR(255) NOT NULL COMMENT 'Original uploaded filename',
  file_path VARCHAR(500) NOT NULL COMMENT 'Relative path to file',
  file_size BIGINT COMMENT 'File size in bytes',
  mime_type VARCHAR(100) COMMENT 'MIME type of the file',
  category VARCHAR(50) COMMENT 'Document category (invoice, contract, report, etc.)',
  tags JSON COMMENT 'Array of tags for organization',
  description TEXT COMMENT 'User-provided description',
  uploaded_by BIGINT UNSIGNED COMMENT 'User ID who uploaded the file',
  created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
  updated_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  
  INDEX idx_entity (entity_type, entity_id),
  INDEX idx_uploaded_by (uploaded_by),
  INDEX idx_category (category),
  INDEX idx_created_at (created_at),
  
  FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Example usage:
-- Entity: vendor_invoices, ID: 123
-- File uploaded as: invoice_vendor_123_20260202_abc123.pdf
-- Category: 'invoice'
-- Tags: ['2026', 'vendor', 'approved']
