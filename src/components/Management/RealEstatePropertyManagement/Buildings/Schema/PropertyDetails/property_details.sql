-- Source: frontend\src\components\Management\RealEstatePropertyManagement\Buildings\PropertyDetails.js
DROP TABLE IF EXISTS `property_details`;
CREATE TABLE IF NOT EXISTS `property_details` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `detail_id` VARCHAR(255) DEFAULT NULL,
    `parent_id` VARCHAR(255) DEFAULT NULL,
    `item_name` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `quantity` INT DEFAULT NULL,
    `total_price` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
