-- Source: frontend\src\components\Management\CrisisRiskManagement\RiskAssessments\RiskScoring.js
DROP TABLE IF EXISTS `risk_scoring`;
CREATE TABLE IF NOT EXISTS `risk_scoring` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `score_id` VARCHAR(255) DEFAULT NULL,
    `risk_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `likelihood` INT DEFAULT NULL,
    `impact` INT DEFAULT NULL,
    `risk_score` INT DEFAULT NULL,
    `score_date` DATE DEFAULT NULL,
    `assessed_by` VARCHAR(255) DEFAULT NULL,
    `score_methodology` VARCHAR(255) DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `trend` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
