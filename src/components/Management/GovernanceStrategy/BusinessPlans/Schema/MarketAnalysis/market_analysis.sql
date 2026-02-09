-- Source: frontend\src\components\Management\GovernanceStrategy\BusinessPlans\MarketAnalysis.js
DROP TABLE IF EXISTS `market_analysis`;
CREATE TABLE IF NOT EXISTS `market_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `region` VARCHAR(255) DEFAULT NULL,
    `market_segment` VARCHAR(255) DEFAULT NULL,
    `market_size` INT DEFAULT NULL,
    `growth_rate` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `competitor_count` INT DEFAULT NULL,
    `opportunities` VARCHAR(255) DEFAULT NULL,
    `threats` VARCHAR(255) DEFAULT NULL,
    `report_date` DATE DEFAULT NULL,
    `analyst_id` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
