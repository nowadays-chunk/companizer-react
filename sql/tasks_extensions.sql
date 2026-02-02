-- Task Table Extensions for Task Management System
-- Add fields to existing tasks table for assignment and tracking

-- Assignment tracking
ALTER TABLE tasks 
ADD COLUMN assigned_by_user_id BIGINT UNSIGNED NULL COMMENT 'User who assigned this task',
ADD COLUMN assigned_via VARCHAR(50) NULL COMMENT 'Assignment method: email or user_id',
ADD COLUMN notification_sent BOOLEAN DEFAULT FALSE COMMENT 'Whether in-app notification was sent',
ADD COLUMN email_notification_sent BOOLEAN DEFAULT FALSE COMMENT 'Whether email notification was sent';

-- Entity relationship
ALTER TABLE tasks
ADD COLUMN related_entity_type VARCHAR(191) NULL COMMENT 'Entity collection name (vendor_invoices, etc.)',
ADD COLUMN related_entity_id BIGINT UNSIGNED NULL COMMENT 'ID of the related entity row';

-- SLA and priority
ALTER TABLE tasks
ADD COLUMN sla_deadline DATETIME(6) NULL COMMENT 'Service Level Agreement deadline',
ADD COLUMN status VARCHAR(50) DEFAULT 'pending' COMMENT 'pending, in_progress, completed, overdue',
ADD COLUMN priority VARCHAR(50) DEFAULT 'medium' COMMENT 'low, medium, high, urgent';

-- Add indexes for performance
ALTER TABLE tasks
ADD INDEX idx_assigned_to (assigned_to),
ADD INDEX idx_status (status),
ADD INDEX idx_priority (priority),
ADD INDEX idx_sla_deadline (sla_deadline),
ADD INDEX idx_related_entity (related_entity_type, related_entity_id);

-- Add foreign key for assigned_by
ALTER TABLE tasks
ADD CONSTRAINT fk_tasks_assigned_by FOREIGN KEY (assigned_by_user_id)
    REFERENCES users(id) ON DELETE SET NULL;
