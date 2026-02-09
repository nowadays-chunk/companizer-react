-- Source: frontend\src\components\Management\HrManagement\PerformanceReviews\PerformanceMetrics.js
DROP TABLE IF EXISTS `performance_metrics`;
CREATE TABLE IF NOT EXISTS `performance_metrics` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `metric_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `metric_name` VARCHAR(255) DEFAULT NULL,
    `target_value` INT DEFAULT NULL,
    `actual_value` INT DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `score` INT DEFAULT NULL,
    `weight` INT DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `evaluated_by` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
