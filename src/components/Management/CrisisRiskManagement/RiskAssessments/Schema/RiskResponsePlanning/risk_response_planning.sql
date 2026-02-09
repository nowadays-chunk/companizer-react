-- Source: frontend\src\components\Management\CrisisRiskManagement\RiskAssessments\RiskResponsePlanning.js
DROP TABLE IF EXISTS `risk_response_planning`;
CREATE TABLE IF NOT EXISTS `risk_response_planning` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `response_id` VARCHAR(255) DEFAULT NULL,
    `risk_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `strategy_type` VARCHAR(100) DEFAULT NULL,
    `planned_action` VARCHAR(255) DEFAULT NULL,
    `responsible_person` VARCHAR(255) DEFAULT NULL,
    `resources_required` VARCHAR(255) DEFAULT NULL,
    `deadline` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `cost_estimate` INT DEFAULT NULL,
    `approval_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
