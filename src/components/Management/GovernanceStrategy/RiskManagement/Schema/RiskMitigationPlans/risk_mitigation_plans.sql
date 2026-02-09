-- Source: frontend\src\components\Management\GovernanceStrategy\RiskManagement\RiskMitigationPlans.js
DROP TABLE IF EXISTS `risk_mitigation_plans`;
CREATE TABLE IF NOT EXISTS `risk_mitigation_plans` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `risk_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `action_plan` VARCHAR(255) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `resources_needed` VARCHAR(255) DEFAULT NULL,
    `budget` INT DEFAULT NULL,
    `progress` INT DEFAULT NULL,
    `review_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
