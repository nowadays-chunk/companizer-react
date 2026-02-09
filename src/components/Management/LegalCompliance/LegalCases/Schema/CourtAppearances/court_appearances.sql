-- Source: frontend\src\components\Management\LegalCompliance\LegalCases\CourtAppearances.js
DROP TABLE IF EXISTS `court_appearances`;
CREATE TABLE IF NOT EXISTS `court_appearances` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `appearance_id` VARCHAR(255) DEFAULT NULL,
    `case_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `judge` VARCHAR(255) DEFAULT NULL,
    `purpose` VARCHAR(255) DEFAULT NULL,
    `attendee_attorney` VARCHAR(255) DEFAULT NULL,
    `outcome` VARCHAR(255) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `next_appearance_date` DATE DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
