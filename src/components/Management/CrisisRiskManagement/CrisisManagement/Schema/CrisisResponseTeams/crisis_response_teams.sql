-- Source: frontend\src\components\Management\CrisisRiskManagement\CrisisManagement\CrisisResponseTeams.js
DROP TABLE IF EXISTS `crisis_response_teams`;
CREATE TABLE IF NOT EXISTS `crisis_response_teams` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `team_id` VARCHAR(255) DEFAULT NULL,
    `incident_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `member_name` VARCHAR(255) DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    `contact_number` VARCHAR(255) DEFAULT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `is_lead` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `availability_status` VARCHAR(100) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
