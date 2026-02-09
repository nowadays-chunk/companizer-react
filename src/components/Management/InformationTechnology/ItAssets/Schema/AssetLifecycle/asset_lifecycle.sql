-- Source: frontend\src\components\Management\InformationTechnology\ItAssets\AssetLifecycle.js
DROP TABLE IF EXISTS `asset_lifecycle`;
CREATE TABLE IF NOT EXISTS `asset_lifecycle` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `lifecycle_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `stage` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `assigned_to` VARCHAR(255) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `condition` VARCHAR(100) DEFAULT NULL,
    `value` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
