-- Source: frontend\src\components\Management\InformationTechnology\ItAssets\HardwareInventory.js
DROP TABLE IF EXISTS `hardware_inventory`;
CREATE TABLE IF NOT EXISTS `hardware_inventory` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `hardware_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `device_name` VARCHAR(255) DEFAULT NULL,
    `serial_number` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(100) DEFAULT NULL,
    `purchase_date` DATE DEFAULT NULL,
    `warranty_expiry` DATE DEFAULT NULL,
    `manufacturer` VARCHAR(255) DEFAULT NULL,
    `model` VARCHAR(255) DEFAULT NULL,
    `assigned_user_id` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `specifications` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
