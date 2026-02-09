-- Source: frontend\src\components\Management\GovernanceStrategy\RiskManagement\RiskAssessments.js
DROP TABLE IF EXISTS `governance_risk_assessments`;
CREATE TABLE IF NOT EXISTS `governance_risk_assessments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `assessment_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `assessment_name` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `assessor` VARCHAR(255) DEFAULT NULL,
    `overall_risk_score` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `scope` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `total_risks_identified` INT DEFAULT NULL,
    `key_findings` VARCHAR(255) DEFAULT NULL,
    `report_document` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
