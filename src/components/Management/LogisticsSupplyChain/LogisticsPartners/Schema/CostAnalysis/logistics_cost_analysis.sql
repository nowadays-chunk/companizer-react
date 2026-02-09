-- Source: frontend\src\components\Management\LogisticsSupplyChain\LogisticsPartners\CostAnalysis.js
DROP TABLE IF EXISTS `logistics_cost_analysis`;
CREATE TABLE IF NOT EXISTS `logistics_cost_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `shipment_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `route_id` VARCHAR(255) DEFAULT NULL,
    `estimated_cost` INT DEFAULT NULL,
    `actual_cost` INT DEFAULT NULL,
    `variance` INT DEFAULT NULL,
    `cost_breakdown` VARCHAR(255) DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
