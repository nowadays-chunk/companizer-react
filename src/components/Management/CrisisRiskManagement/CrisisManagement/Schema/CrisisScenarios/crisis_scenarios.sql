-- Source: frontend\src\components\Management\CrisisRiskManagement\CrisisManagement\CrisisScenarios.js
DROP TABLE IF EXISTS `crisis_scenarios`;
CREATE TABLE IF NOT EXISTS `crisis_scenarios` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `scenario_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `scenario_title` VARCHAR(255) DEFAULT NULL,
    `risk_level` VARCHAR(100) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `probability` VARCHAR(100) DEFAULT NULL,
    `impact_description` VARCHAR(255) DEFAULT NULL,
    `mitigation_measures` VARCHAR(255) DEFAULT NULL,
    `trigger_events` VARCHAR(255) DEFAULT NULL,
    `simulation_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
