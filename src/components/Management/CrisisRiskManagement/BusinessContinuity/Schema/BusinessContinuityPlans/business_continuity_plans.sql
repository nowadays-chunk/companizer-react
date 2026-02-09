-- Source: frontend\src\components\Management\CrisisRiskManagement\BusinessContinuity\BusinessContinuityPlans.js
DROP TABLE IF EXISTS `business_continuity_plans`;
CREATE TABLE IF NOT EXISTS `business_continuity_plans` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `plan_name` VARCHAR(255) DEFAULT NULL,
    `scope` VARCHAR(255) DEFAULT NULL,
    `critical_functions` VARCHAR(255) DEFAULT NULL,
    `rto_hours` INT DEFAULT NULL,
    `rpo_hours` INT DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `last_tested_date` DATE DEFAULT NULL,
    `test_result` VARCHAR(100) DEFAULT NULL,
    `next_review_date` DATE DEFAULT NULL,
    `activation_procedures_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
