-- Source: frontend\src\components\Management\SalesMarketing\Pricing\PromotionalPricing.js
DROP TABLE IF EXISTS `promotional_pricing`;
CREATE TABLE IF NOT EXISTS `promotional_pricing` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `promo_id` VARCHAR(255) DEFAULT NULL,
    `product_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `promo_name` VARCHAR(255) DEFAULT NULL,
    `discount_amount` INT DEFAULT NULL,
    `start_time` DATE DEFAULT NULL,
    `end_time` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `promo_code` VARCHAR(255) DEFAULT NULL,
    `usage_limit` INT DEFAULT NULL,
    `usage_count` INT DEFAULT NULL,
    `conditions` VARCHAR(255) DEFAULT NULL,
    `marketing_channel` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
