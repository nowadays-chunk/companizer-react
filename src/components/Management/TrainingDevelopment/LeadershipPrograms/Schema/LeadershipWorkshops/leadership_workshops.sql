-- Source: frontend\src\components\Management\TrainingDevelopment\LeadershipPrograms\LeadershipWorkshops.js
DROP TABLE IF EXISTS `leadership_workshops`;
CREATE TABLE IF NOT EXISTS `leadership_workshops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `workshop_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `topic` VARCHAR(255) DEFAULT NULL,
    `facilitator` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `duration_hours` INT DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `max_attendees` INT DEFAULT NULL,
    `registered_count` INT DEFAULT NULL,
    `materials_link` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
