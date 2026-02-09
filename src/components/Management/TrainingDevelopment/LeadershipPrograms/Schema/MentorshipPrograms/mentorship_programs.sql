-- Source: frontend\src\components\Management\TrainingDevelopment\LeadershipPrograms\MentorshipPrograms.js
DROP TABLE IF EXISTS `mentorship_programs`;
CREATE TABLE IF NOT EXISTS `mentorship_programs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `mentorship_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `mentor_id` VARCHAR(255) DEFAULT NULL,
    `mentee_id` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `meeting_frequency` VARCHAR(100) DEFAULT NULL,
    `goals` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
