-- Source: frontend\src\components\Management\SalesMarketing\Campaigns\CampaignPlanning.js
DROP TABLE IF EXISTS `campaign_planning`;
CREATE TABLE IF NOT EXISTS `campaign_planning` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `campaign_name` VARCHAR(255) DEFAULT NULL,
    `objective` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `budget` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `channel_strategy` VARCHAR(255) DEFAULT NULL,
    `target_audience` VARCHAR(255) DEFAULT NULL,
    `key_message` VARCHAR(255) DEFAULT NULL,
    `creative_assets_url` VARCHAR(255) DEFAULT NULL,
    `manager_id` VARCHAR(255) DEFAULT NULL,
    `agency_id` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
