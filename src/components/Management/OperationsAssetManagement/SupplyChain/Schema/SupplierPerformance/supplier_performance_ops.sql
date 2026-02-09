-- Source: frontend\src\components\Management\OperationsAssetManagement\SupplyChain\SupplierPerformance.js
DROP TABLE IF EXISTS `supplier_performance_ops`;
CREATE TABLE IF NOT EXISTS `supplier_performance_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `performance_id` VARCHAR(255) DEFAULT NULL,
    `supplier_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `score` INT DEFAULT NULL,
    `on_time_delivery_rate` INT DEFAULT NULL,
    `quality_defect_rate` INT DEFAULT NULL,
    `response_time_avg` INT DEFAULT NULL,
    `cost_competitiveness` INT DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `evaluated_by` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
