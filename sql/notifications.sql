-- Notifications Table
-- Stores notifications for users including task assignments, entity validations, etc.

CREATE TABLE IF NOT EXISTS notifications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    type VARCHAR(50) NOT NULL COMMENT 'task_assigned, task_completed, entity_validated, approval_request, etc.',
    title VARCHAR(191) NOT NULL,
    message TEXT NOT NULL,
    related_task_id BIGINT UNSIGNED NULL,
    related_entity_type VARCHAR(191) NULL COMMENT 'Entity collection name',
    related_entity_id BIGINT UNSIGNED NULL COMMENT 'ID of related entity',
    is_read BOOLEAN DEFAULT FALSE,
    read_at DATETIME(6) NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    
    INDEX idx_user (user_id),
    INDEX idx_read (is_read),
    INDEX idx_type (type),
    INDEX idx_created (created_at),
    
    CONSTRAINT fk_notification_user FOREIGN KEY (user_id)
        REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_notification_task FOREIGN KEY (related_task_id)
        REFERENCES tasks(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample notification structure:
-- {
--   "user_id": 5,
--   "type": "task_assigned",
--   "title": "New Task Assigned",
--   "message": "You have been assigned to review Invoice #12345",
--   "related_task_id": 42,
--   "related_entity_type": "vendor_invoices",
--   "related_entity_id": 12345,
--   "is_read": false
-- }
