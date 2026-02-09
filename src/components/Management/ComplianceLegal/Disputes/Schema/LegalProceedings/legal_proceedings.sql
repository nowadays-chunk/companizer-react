-- Source: frontend\src\components\Management\ComplianceLegal\Disputes\LegalProceedings.js
DROP TABLE IF EXISTS `legal_proceedings`;
CREATE TABLE IF NOT EXISTS `legal_proceedings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `proceeding_id` VARCHAR(255) DEFAULT NULL,
    `case_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `proceeding_type` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `court` VARCHAR(255) DEFAULT NULL,
    `judge` VARCHAR(255) DEFAULT NULL,
    `attendees` VARCHAR(255) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
