-- Source: frontend\src\components\Management\ExternalRelationships\StakeholderManagement\StakeholderFeedback.js
DROP TABLE IF EXISTS `stakeholder_feedback`;
CREATE TABLE IF NOT EXISTS `stakeholder_feedback` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `feedback_id` VARCHAR(255) DEFAULT NULL,
    `stakeholder_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `feedback_type` VARCHAR(100) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `date_received` DATE DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `action_taken` VARCHAR(255) DEFAULT NULL,
    `assigned_to` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
