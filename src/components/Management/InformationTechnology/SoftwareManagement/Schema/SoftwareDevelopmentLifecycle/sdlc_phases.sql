-- Source: frontend\src\components\Management\InformationTechnology\SoftwareManagement\SoftwareDevelopmentLifecycle.js
DROP TABLE IF EXISTS `sdlc_phases`;
CREATE TABLE IF NOT EXISTS `sdlc_phases` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `cycle_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `phase` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `team` VARCHAR(255) DEFAULT NULL,
    `deliverables` VARCHAR(255) DEFAULT NULL,
    `risks` VARCHAR(255) DEFAULT NULL,
    `budget_spent` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
