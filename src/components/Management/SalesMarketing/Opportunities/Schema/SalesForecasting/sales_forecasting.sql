-- Source: frontend\src\components\Management\SalesMarketing\Opportunities\SalesForecasting.js
DROP TABLE IF EXISTS `sales_forecasting`;
CREATE TABLE IF NOT EXISTS `sales_forecasting` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `forecast_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `forecast_amount` INT DEFAULT NULL,
    `confidence_level` VARCHAR(100) DEFAULT NULL,
    `sales_rep_id` VARCHAR(255) DEFAULT NULL,
    `region` VARCHAR(255) DEFAULT NULL,
    `quota` INT DEFAULT NULL,
    `gap_to_quota` INT DEFAULT NULL,
    `generated_date` DATE DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
