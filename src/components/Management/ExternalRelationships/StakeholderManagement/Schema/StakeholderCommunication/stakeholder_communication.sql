-- Source: frontend\src\components\Management\ExternalRelationships\StakeholderManagement\StakeholderCommunication.js
DROP TABLE IF EXISTS `stakeholder_communication`;
CREATE TABLE IF NOT EXISTS `stakeholder_communication` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `communication_id` VARCHAR(255) DEFAULT NULL,
    `stakeholder_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `method` VARCHAR(100) DEFAULT NULL,
    `summary` VARCHAR(255) DEFAULT NULL,
    `participants` VARCHAR(255) DEFAULT NULL,
    `outcome` VARCHAR(255) DEFAULT NULL,
    `next_steps` VARCHAR(255) DEFAULT NULL,
    `attachments_url` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `options` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
