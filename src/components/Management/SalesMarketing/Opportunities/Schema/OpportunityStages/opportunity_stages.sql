-- Source: frontend\src\components\Management\SalesMarketing\Opportunities\OpportunityStages.js
DROP TABLE IF EXISTS `opportunity_stages`;
CREATE TABLE IF NOT EXISTS `opportunity_stages` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `stage_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `stage_name` VARCHAR(255) DEFAULT NULL,
    `probability_percentage` INT DEFAULT NULL,
    `sort_order` INT DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `days_in_stage_avg` INT DEFAULT NULL,
    `requirements` VARCHAR(255) DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `color_code` VARCHAR(255) DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `is_won_stage` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
