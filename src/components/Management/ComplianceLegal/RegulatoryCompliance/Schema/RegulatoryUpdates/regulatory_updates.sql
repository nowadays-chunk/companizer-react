-- Source: frontend\src\components\Management\ComplianceLegal\RegulatoryCompliance\RegulatoryUpdates.js
DROP TABLE IF EXISTS `regulatory_updates`;
CREATE TABLE IF NOT EXISTS `regulatory_updates` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `update_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `source` VARCHAR(255) DEFAULT NULL,
    `published_date` DATE DEFAULT NULL,
    `impact_analysis` VARCHAR(255) DEFAULT NULL,
    `action_required` VARCHAR(255) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
