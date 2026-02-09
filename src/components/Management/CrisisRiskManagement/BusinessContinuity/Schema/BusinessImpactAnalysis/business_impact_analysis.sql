-- Source: frontend\src\components\Management\CrisisRiskManagement\BusinessContinuity\BusinessImpactAnalysis.js
DROP TABLE IF EXISTS `business_impact_analysis`;
CREATE TABLE IF NOT EXISTS `business_impact_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `process_name` VARCHAR(255) DEFAULT NULL,
    `impact_category` VARCHAR(100) DEFAULT NULL,
    `financial_impact_daily` INT DEFAULT NULL,
    `max_tolerable_downtime` VARCHAR(255) DEFAULT NULL,
    `recovery_priorities` VARCHAR(100) DEFAULT NULL,
    `dependencies` VARCHAR(255) DEFAULT NULL,
    `analyst_name` VARCHAR(255) DEFAULT NULL,
    `analysis_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
