-- Source: frontend\src\components\Management\ProjectTaskManagement\Projects\ProjectPhases.js
DROP TABLE IF EXISTS `project_phases`;
CREATE TABLE IF NOT EXISTS `project_phases` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `phase_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `phase_name` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `budget_allocation` INT DEFAULT NULL,
    `manager_id` VARCHAR(255) DEFAULT NULL,
    `objectives` VARCHAR(255) DEFAULT NULL,
    `order_sequence` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
