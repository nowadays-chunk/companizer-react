-- Source: frontend\src\components\Management\entity_comments_history.js
DROP TABLE IF EXISTS `entity_comments_history`;
CREATE TABLE IF NOT EXISTS `entity_comments_history` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `comment_id` VARCHAR(255) DEFAULT NULL,
    `entity_type` VARCHAR(255) DEFAULT NULL,
    `entity_id` VARCHAR(255) DEFAULT NULL,
    `user_id` VARCHAR(255) DEFAULT NULL,
    `author_name` VARCHAR(255) DEFAULT NULL,
    `comment_text` TEXT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `unit_price` INT DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
