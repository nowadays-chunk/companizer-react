-- Source: frontend\src\components\Management\ExternalRelationships\VendorManagement\VendorOnboarding.js
DROP TABLE IF EXISTS `vendor_onboarding`;
CREATE TABLE IF NOT EXISTS `vendor_onboarding` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `onboarding_id` VARCHAR(255) DEFAULT NULL,
    `vendor_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `documents_submitted` VARCHAR(255) DEFAULT NULL,
    `bank_details_verified` VARCHAR(255) DEFAULT NULL,
    `nda_signed` VARCHAR(255) DEFAULT NULL,
    `compliance_check_passed` VARCHAR(255) DEFAULT NULL,
    `onboarding_manager` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
