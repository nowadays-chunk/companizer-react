-- Source: frontend\src\components\Management\SalesMarketing\Leads\LeadConversionRates.js
DROP TABLE IF EXISTS `lead_conversion_rates`;
CREATE TABLE IF NOT EXISTS `lead_conversion_rates` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `rate_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `source` VARCHAR(255) DEFAULT NULL,
    `total_leads` INT DEFAULT NULL,
    `converted_leads` INT DEFAULT NULL,
    `conversion_rate_percentage` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `campaign_id` VARCHAR(255) DEFAULT NULL,
    `avg_time_to_convert_days` INT DEFAULT NULL,
    `cost_per_acquisition` INT DEFAULT NULL,
    `industry_segment` VARCHAR(255) DEFAULT NULL,
    `region` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
