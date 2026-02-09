-- Source: frontend\src\components\Management\InformationTechnology\ItAssets\SoftwareLicenses.js
DROP TABLE IF EXISTS `software_licenses`;
CREATE TABLE IF NOT EXISTS `software_licenses` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `license_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `software_name` VARCHAR(255) DEFAULT NULL,
    `license_key` VARCHAR(255) DEFAULT NULL,
    `seats_total` INT DEFAULT NULL,
    `seats_used` INT DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `vendor` VARCHAR(255) DEFAULT NULL,
    `purchase_date` DATE DEFAULT NULL,
    `cost_per_seat` INT DEFAULT NULL,
    `is_subscription` VARCHAR(255) DEFAULT NULL,
    `auto_renew` VARCHAR(255) DEFAULT NULL,
    `admin_email` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
