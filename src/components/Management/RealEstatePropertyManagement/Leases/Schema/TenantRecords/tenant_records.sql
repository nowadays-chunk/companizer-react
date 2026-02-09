-- Source: frontend\src\components\Management\RealEstatePropertyManagement\Leases\TenantRecords.js
DROP TABLE IF EXISTS `tenant_records`;
CREATE TABLE IF NOT EXISTS `tenant_records` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tenant_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `tenant_name` VARCHAR(255) DEFAULT NULL,
    `contact_person` VARCHAR(255) DEFAULT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `phone` VARCHAR(255) DEFAULT NULL,
    `industry` VARCHAR(255) DEFAULT NULL,
    `credit_rating` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
