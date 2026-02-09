-- Source: frontend\src\components\Management\ComplianceLegal\RegulatoryCompliance\ComplianceAudits.js
DROP TABLE IF EXISTS `compliance_audits`;
CREATE TABLE IF NOT EXISTS `compliance_audits` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `audit_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `audit_type` VARCHAR(255) DEFAULT NULL,
    `auditor` VARCHAR(255) DEFAULT NULL,
    `audit_date` DATE DEFAULT NULL,
    `score` INT DEFAULT NULL,
    `findings_count` INT DEFAULT NULL,
    `report_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
