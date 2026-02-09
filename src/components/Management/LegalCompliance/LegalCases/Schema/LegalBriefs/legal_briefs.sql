-- Source: frontend\src\components\Management\LegalCompliance\LegalCases\LegalBriefs.js
DROP TABLE IF EXISTS `legal_briefs`;
CREATE TABLE IF NOT EXISTS `legal_briefs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `brief_id` VARCHAR(255) DEFAULT NULL,
    `case_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `submission_date` DATE DEFAULT NULL,
    `author` VARCHAR(255) DEFAULT NULL,
    `document_url` VARCHAR(255) DEFAULT NULL,
    `summary` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `version` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
