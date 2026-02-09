-- Source: frontend\src\components\Management\RealEstatePropertyManagement\Buildings\RentalAgreements.js
DROP TABLE IF EXISTS `rental_agreements`;
CREATE TABLE IF NOT EXISTS `rental_agreements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `agreement_id` VARCHAR(255) DEFAULT NULL,
    `property_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `tenant_name` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `monthly_rent` INT DEFAULT NULL,
    `security_deposit` INT DEFAULT NULL,
    `payment_due_day` INT DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `renewal_terms` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
