-- Source: frontend\src\components\Management\OperationsAssetManagement\Assets\AssetTracking.js
DROP TABLE IF EXISTS `asset_tracking_ops`;
CREATE TABLE IF NOT EXISTS `asset_tracking_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `current_location` VARCHAR(255) DEFAULT NULL,
    `check_in_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `custodian` VARCHAR(255) DEFAULT NULL,
    `rfid_tag` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `condition` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
