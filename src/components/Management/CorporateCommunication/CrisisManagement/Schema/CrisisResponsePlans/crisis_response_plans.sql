-- Source: frontend\src\components\Management\CorporateCommunication\CrisisManagement\CrisisResponsePlans.js
DROP TABLE IF EXISTS `crisis_response_plans`;
CREATE TABLE IF NOT EXISTS `crisis_response_plans` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `plan_name` VARCHAR(255) DEFAULT NULL,
    `scenario` VARCHAR(255) DEFAULT NULL,
    `activation_criteria` VARCHAR(255) DEFAULT NULL,
    `key_contacts` VARCHAR(255) DEFAULT NULL,
    `last_updated` DATE DEFAULT NULL,
    `version` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
