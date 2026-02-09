-- Source: frontend\src\components\Management\SalesMarketing\Campaigns\RoiAnalysis.js
DROP TABLE IF EXISTS `roi_analysis`;
CREATE TABLE IF NOT EXISTS `roi_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `campaign_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `total_revenue` INT DEFAULT NULL,
    `total_cost` INT DEFAULT NULL,
    `roi_percentage` INT DEFAULT NULL,
    `net_profit` INT DEFAULT NULL,
    `analysis_date` DATE DEFAULT NULL,
    `customer_acquisition_cost` INT DEFAULT NULL,
    `lifetime_value_projection` INT DEFAULT NULL,
    `conversion_rate` INT DEFAULT NULL,
    `analyst_notes` VARCHAR(255) DEFAULT NULL,
    `benchmark_roi` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
