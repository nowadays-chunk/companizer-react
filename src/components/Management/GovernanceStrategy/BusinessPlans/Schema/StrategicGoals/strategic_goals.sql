-- Source: frontend\src\components\Management\GovernanceStrategy\BusinessPlans\StrategicGoals.js
DROP TABLE IF EXISTS `strategic_goals`;
CREATE TABLE IF NOT EXISTS `strategic_goals` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `goal_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `deadline` DATE DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `progress_percentage` INT DEFAULT NULL,
    `owner_id` VARCHAR(255) DEFAULT NULL,
    `department_id` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
