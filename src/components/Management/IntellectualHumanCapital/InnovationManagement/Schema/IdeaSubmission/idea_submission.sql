-- Source: frontend\src\components\Management\IntellectualHumanCapital\InnovationManagement\IdeaSubmission.js
DROP TABLE IF EXISTS `idea_submission`;
CREATE TABLE IF NOT EXISTS `idea_submission` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `idea_id` VARCHAR(255) DEFAULT NULL,
    `submitter_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `submission_date` DATE DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `potential_impact` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `votes` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
