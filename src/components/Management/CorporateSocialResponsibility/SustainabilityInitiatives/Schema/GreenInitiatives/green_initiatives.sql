-- Source: frontend\src\components\Management\CorporateSocialResponsibility\SustainabilityInitiatives\GreenInitiatives.js
DROP TABLE IF EXISTS `green_initiatives`;
CREATE TABLE IF NOT EXISTS `green_initiatives` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `initiative_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `goal` VARCHAR(255) DEFAULT NULL,
    `progress_percentage` INT DEFAULT NULL,
    `budget` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
