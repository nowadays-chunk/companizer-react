-- Source: frontend\src\components\Management\ExternalRelationships\StakeholderManagement\StakeholderAnalysis.js
DROP TABLE IF EXISTS `stakeholder_analysis`;
CREATE TABLE IF NOT EXISTS `stakeholder_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `stakeholder_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `influence_level` VARCHAR(100) DEFAULT NULL,
    `interest_level` VARCHAR(100) DEFAULT NULL,
    `attitude` VARCHAR(100) DEFAULT NULL,
    `key_concerns` VARCHAR(255) DEFAULT NULL,
    `expectations` VARCHAR(255) DEFAULT NULL,
    `engagement_strategy` VARCHAR(255) DEFAULT NULL,
    `analyst` VARCHAR(255) DEFAULT NULL,
    `analysis_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
