-- Source: frontend\src\components\Management\LogisticsSupplyChain\LogisticsPartners\PerformanceMetrics.js
DROP TABLE IF EXISTS `logistics_performance_metrics`;
CREATE TABLE IF NOT EXISTS `logistics_performance_metrics` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `metric_id` VARCHAR(255) DEFAULT NULL,
    `partner_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `delivery_timeliness` INT DEFAULT NULL,
    `damage_rate` INT DEFAULT NULL,
    `cost_efficiency` INT DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `rating` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
