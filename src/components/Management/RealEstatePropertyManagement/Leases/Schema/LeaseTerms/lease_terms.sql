-- Source: frontend\src\components\Management\RealEstatePropertyManagement\Leases\LeaseTerms.js
DROP TABLE IF EXISTS `lease_terms`;
CREATE TABLE IF NOT EXISTS `lease_terms` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `term_id` VARCHAR(255) DEFAULT NULL,
    `agreement_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `clause_title` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `is_mandatory` VARCHAR(255) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
