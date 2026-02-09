-- Source: frontend\src\components\Management\LogisticsSupplyChain\SupplierContracts\SupplierPerformanceEvaluation.js
DROP TABLE IF EXISTS `supplier_performance_evaluation`;
CREATE TABLE IF NOT EXISTS `supplier_performance_evaluation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `evaluation_id` VARCHAR(255) DEFAULT NULL,
    `supplier_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `quality_score` INT DEFAULT NULL,
    `delivery_score` INT DEFAULT NULL,
    `price_score` INT DEFAULT NULL,
    `overall_score` INT DEFAULT NULL,
    `evaluated_by` VARCHAR(255) DEFAULT NULL,
    `date_evaluated` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
