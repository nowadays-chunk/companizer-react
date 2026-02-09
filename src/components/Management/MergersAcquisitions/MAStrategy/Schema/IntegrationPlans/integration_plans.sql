-- Source: frontend\src\components\Management\MergersAcquisitions\MAStrategy\IntegrationPlans.js
DROP TABLE IF EXISTS `integration_plans`;
CREATE TABLE IF NOT EXISTS `integration_plans` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `target_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `plan_name` VARCHAR(255) DEFAULT NULL,
    `phase` VARCHAR(100) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `objectives` VARCHAR(255) DEFAULT NULL,
    `timeline_start` DATE DEFAULT NULL,
    `timeline_end` DATE DEFAULT NULL,
    `budget_allocated` INT DEFAULT NULL,
    `progress` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
