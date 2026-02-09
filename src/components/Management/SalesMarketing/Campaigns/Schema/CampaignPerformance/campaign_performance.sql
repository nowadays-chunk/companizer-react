-- Source: frontend\src\components\Management\SalesMarketing\Campaigns\CampaignPerformance.js
DROP TABLE IF EXISTS `campaign_performance`;
CREATE TABLE IF NOT EXISTS `campaign_performance` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `performance_id` VARCHAR(255) DEFAULT NULL,
    `campaign_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `impressions` INT DEFAULT NULL,
    `clicks` INT DEFAULT NULL,
    `conversions` INT DEFAULT NULL,
    `ctr` INT DEFAULT NULL,
    `cpc` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `platform` VARCHAR(100) DEFAULT NULL,
    `spend` INT DEFAULT NULL,
    `roas` INT DEFAULT NULL,
    `bounce_rate` INT DEFAULT NULL,
    `avg_session_duration` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
