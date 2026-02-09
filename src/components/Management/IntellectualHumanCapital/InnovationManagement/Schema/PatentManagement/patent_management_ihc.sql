-- Source: frontend\src\components\Management\IntellectualHumanCapital\InnovationManagement\PatentManagement.js
DROP TABLE IF EXISTS `patent_management_ihc`;
CREATE TABLE IF NOT EXISTS `patent_management_ihc` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `patent_id` VARCHAR(255) DEFAULT NULL,
    `innovation_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `filling_number` VARCHAR(255) DEFAULT NULL,
    `filing_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `inventors` VARCHAR(255) DEFAULT NULL,
    `jurisdiction` VARCHAR(255) DEFAULT NULL,
    `expiration_date` DATE DEFAULT NULL,
    `attorney_contact` VARCHAR(255) DEFAULT NULL,
    `cost_incurred` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
