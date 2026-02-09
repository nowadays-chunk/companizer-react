-- Source: frontend\src\components\Management\LegalCompliance\LegalCases\CaseManagement.js
DROP TABLE IF EXISTS `legal_case_management`;
CREATE TABLE IF NOT EXISTS `legal_case_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `case_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `case_name` VARCHAR(255) DEFAULT NULL,
    `case_type` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `lead_attorney` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `open_date` DATE DEFAULT NULL,
    `close_date` DATE DEFAULT NULL,
    `budget` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
