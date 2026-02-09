-- Source: frontend\src\components\Management\SalesMarketing\ClientsCustomers\CustomerSegmentation.js
DROP TABLE IF EXISTS `customer_segmentation`;
CREATE TABLE IF NOT EXISTS `customer_segmentation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `segment_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `segment_name` VARCHAR(255) DEFAULT NULL,
    `criteria` VARCHAR(255) DEFAULT NULL,
    `customer_count` INT DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `last_updated` DATE DEFAULT NULL,
    `average_ltv` INT DEFAULT NULL,
    `marketing_strategy` VARCHAR(255) DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `is_dynamic` VARCHAR(255) DEFAULT NULL,
    `region_filter` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
