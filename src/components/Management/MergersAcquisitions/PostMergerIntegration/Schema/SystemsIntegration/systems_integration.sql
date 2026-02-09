-- Source: frontend\src\components\Management\MergersAcquisitions\PostMergerIntegration\SystemsIntegration.js
DROP TABLE IF EXISTS `systems_integration`;
CREATE TABLE IF NOT EXISTS `systems_integration` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `system_integration_id` VARCHAR(255) DEFAULT NULL,
    `target_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `system_name` VARCHAR(255) DEFAULT NULL,
    `disposition` VARCHAR(100) DEFAULT NULL,
    `target_date` DATE DEFAULT NULL,
    `data_migration_status` INT DEFAULT NULL,
    `user_migration_status` INT DEFAULT NULL,
    `technical_lead` VARCHAR(255) DEFAULT NULL,
    `risks` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
