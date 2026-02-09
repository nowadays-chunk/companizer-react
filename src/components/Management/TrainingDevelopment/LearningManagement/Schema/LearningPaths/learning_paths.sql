-- Source: frontend\src\components\Management\TrainingDevelopment\LearningManagement\LearningPaths.js
DROP TABLE IF EXISTS `learning_paths`;
CREATE TABLE IF NOT EXISTS `learning_paths` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `path_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `path_name` VARCHAR(255) DEFAULT NULL,
    `target_role` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `course_count` INT DEFAULT NULL,
    `estimated_duration_hours` INT DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `is_mandatory_for_role` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
