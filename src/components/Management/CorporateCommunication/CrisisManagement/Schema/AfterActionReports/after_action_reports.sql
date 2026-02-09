-- Source: frontend\src\components\Management\CorporateCommunication\CrisisManagement\AfterActionReports.js
DROP TABLE IF EXISTS `after_action_reports`;
CREATE TABLE IF NOT EXISTS `after_action_reports` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `report_id` VARCHAR(255) DEFAULT NULL,
    `incident_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `incident_summary` VARCHAR(255) DEFAULT NULL,
    `report_date` DATE DEFAULT NULL,
    `evaluation` VARCHAR(255) DEFAULT NULL,
    `prepared_by` VARCHAR(255) DEFAULT NULL,
    `lessons_learned` VARCHAR(255) DEFAULT NULL,
    `effectiveness_rating` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
