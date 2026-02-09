-- Source: frontend\src\components\Management\OperationsAssetManagement\Pricing\Discounts.js
DROP TABLE IF EXISTS `discounts_ops`;
CREATE TABLE IF NOT EXISTS `discounts_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `discount_id` VARCHAR(255) DEFAULT NULL,
    `product_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `discount_code` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `discount_type` VARCHAR(100) DEFAULT NULL,
    `value` INT DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `min_purchase_amount` INT DEFAULT NULL,
    `max_usage` INT DEFAULT NULL,
    `usage_count` INT DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
