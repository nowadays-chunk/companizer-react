-- Source: frontend\src\components\Management\ComplianceLegal\IntellectualProperty\PatentFilings.js
DROP TABLE IF EXISTS `patent_filings`;
CREATE TABLE IF NOT EXISTS `patent_filings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `filing_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `patent_title` VARCHAR(255) DEFAULT NULL,
    `application_number` VARCHAR(255) DEFAULT NULL,
    `filing_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `inventors` VARCHAR(255) DEFAULT NULL,
    `jurisdiction` VARCHAR(255) DEFAULT NULL,
    `attorney_ref` VARCHAR(255) DEFAULT NULL,
    `patent_number` VARCHAR(255) DEFAULT NULL,
    `grant_date` DATE DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `cost_to_date` INT DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `multiline` VARCHAR(255) DEFAULT NULL,
    `rows` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
