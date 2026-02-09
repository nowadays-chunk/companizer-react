-- Source: frontend\src\components\Management\CorporateCommunication\InternalCommunication\Announcements.js
DROP TABLE IF EXISTS `internal_announcements`;
CREATE TABLE IF NOT EXISTS `internal_announcements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `announcement_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `message` VARCHAR(255) DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `date_posted` DATE DEFAULT NULL,
    `target_audience` VARCHAR(255) DEFAULT NULL,
    `posted_by` VARCHAR(255) DEFAULT NULL,
    `bel` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
