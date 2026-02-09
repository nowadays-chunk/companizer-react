-- Source: frontend\src\components\Management\GovernanceStrategy\KpisAnalytics\Benchmarking.js
DROP TABLE IF EXISTS `benchmarking`;
CREATE TABLE IF NOT EXISTS `benchmarking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `benchmark_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `metric_name` VARCHAR(255) DEFAULT NULL,
    `industry_avg` INT DEFAULT NULL,
    `company_value` INT DEFAULT NULL,
    `unit` VARCHAR(255) DEFAULT NULL,
    `date_recorded` DATE DEFAULT NULL,
    `source` VARCHAR(255) DEFAULT NULL,
    `competitor_best` INT DEFAULT NULL,
    `gap_analysis` VARCHAR(255) DEFAULT NULL,
    `target_value` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
