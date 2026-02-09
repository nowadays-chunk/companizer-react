-- Source: frontend\src\components\Management\CorporateCommunication\ExternalCommunication\MediaRelations.js
DROP TABLE IF EXISTS `media_relations`;
CREATE TABLE IF NOT EXISTS `media_relations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `contact_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `outlet_name` VARCHAR(255) DEFAULT NULL,
    `contact_name` VARCHAR(255) DEFAULT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `phone` VARCHAR(255) DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    `sentiment` VARCHAR(100) DEFAULT NULL,
    `last_contact_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
