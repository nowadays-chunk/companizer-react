-- Source: frontend\src\components\Management\ExternalRelationships\VendorManagement\VendorAssessments.js
DROP TABLE IF EXISTS `vendor_assessments`;
CREATE TABLE IF NOT EXISTS `vendor_assessments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `assessment_id` VARCHAR(255) DEFAULT NULL,
    `vendor_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `assessment_date` DATE DEFAULT NULL,
    `assessor` VARCHAR(255) DEFAULT NULL,
    `overall_score` INT DEFAULT NULL,
    `criteria_quality` INT DEFAULT NULL,
    `criteria_delivery` INT DEFAULT NULL,
    `criteria_cost` INT DEFAULT NULL,
    `risk_level` VARCHAR(255) DEFAULT NULL,
    `recommendation` VARCHAR(100) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
