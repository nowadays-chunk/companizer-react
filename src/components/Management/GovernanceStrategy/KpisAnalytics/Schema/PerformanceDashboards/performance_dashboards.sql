-- Source: frontend\src\components\Management\GovernanceStrategy\KpisAnalytics\PerformanceDashboards.js
DROP TABLE IF EXISTS `performance_dashboards`;
CREATE TABLE IF NOT EXISTS `performance_dashboards` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `dashboard_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `dashboard_name` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `department_id` VARCHAR(255) DEFAULT NULL,
    `url` VARCHAR(255) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `refresh_rate` VARCHAR(255) DEFAULT NULL,
    `widgets_count` INT DEFAULT NULL,
    `is_public` VARCHAR(255) DEFAULT NULL,
    `last_accessed` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
