-- Source: frontend\src\components\Management\TrainingDevelopment\LearningManagement\CourseCatalog.js
DROP TABLE IF EXISTS `course_catalog`;
CREATE TABLE IF NOT EXISTS `course_catalog` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `course_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `delivery_method` VARCHAR(100) DEFAULT NULL,
    `duration_minutes` INT DEFAULT NULL,
    `provider` VARCHAR(255) DEFAULT NULL,
    `skill_level` VARCHAR(100) DEFAULT NULL,
    `rating` INT DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
