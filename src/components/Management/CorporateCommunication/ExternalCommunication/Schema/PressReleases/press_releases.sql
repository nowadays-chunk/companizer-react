-- Source: frontend\src\components\Management\CorporateCommunication\ExternalCommunication\PressReleases.js
DROP TABLE IF EXISTS `press_releases`;
CREATE TABLE IF NOT EXISTS `press_releases` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `release_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `headline` VARCHAR(255) DEFAULT NULL,
    `pub_date` DATE DEFAULT NULL,
    `content` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `author` VARCHAR(255) DEFAULT NULL,
    `media_kit_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
