-- Source: frontend\src\components\Management\CorporateSocialResponsibility\CommunityOutreach\EmployeeVolunteering.js
DROP TABLE IF EXISTS `employee_volunteering`;
CREATE TABLE IF NOT EXISTS `employee_volunteering` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `event_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `event_name` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `volunteers_count` INT DEFAULT NULL,
    `hours_contributed` INT DEFAULT NULL,
    `organization` VARCHAR(255) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `outcome` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
