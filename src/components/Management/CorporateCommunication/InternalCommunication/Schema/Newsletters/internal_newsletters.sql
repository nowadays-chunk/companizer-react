-- Source: frontend\src\components\Management\CorporateCommunication\InternalCommunication\Newsletters.js
DROP TABLE IF EXISTS `internal_newsletters`;
CREATE TABLE IF NOT EXISTS `internal_newsletters` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `newsletter_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `subject` VARCHAR(255) DEFAULT NULL,
    `send_date` DATE DEFAULT NULL,
    `content_summary` VARCHAR(255) DEFAULT NULL,
    `distribution_list` VARCHAR(255) DEFAULT NULL,
    `open_rate` INT DEFAULT NULL,
    `click_rate` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
