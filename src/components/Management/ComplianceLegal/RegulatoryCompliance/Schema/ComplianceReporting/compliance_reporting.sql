-- Source: frontend\src\components\Management\ComplianceLegal\RegulatoryCompliance\ComplianceReporting.js
DROP TABLE IF EXISTS `compliance_reporting`;
CREATE TABLE IF NOT EXISTS `compliance_reporting` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `report_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `report_name` VARCHAR(255) DEFAULT NULL,
    `regulatory_body` VARCHAR(255) DEFAULT NULL,
    `submission_date` DATE DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `is_submitted` VARCHAR(255) DEFAULT NULL,
    `confirmation_receipt` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
