-- Source: frontend\src\components\Management\IntellectualHumanCapital\KnowledgeBase\BestPractices.js
DROP TABLE IF EXISTS `best_practices`;
CREATE TABLE IF NOT EXISTS `best_practices` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `practice_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `category` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `author` VARCHAR(255) DEFAULT NULL,
    `date_added` DATE DEFAULT NULL,
    `approval_status` VARCHAR(100) DEFAULT NULL,
    `tags` VARCHAR(255) DEFAULT NULL,
    `rating` INT DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
