-- Source: frontend\src\components\Management\SalesMarketing\Pricing\SM_PriceLists.js
DROP TABLE IF EXISTS `price_lists`;
CREATE TABLE IF NOT EXISTS `price_lists` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `list_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `list_name` VARCHAR(255) DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `region` VARCHAR(255) DEFAULT NULL,
    `channel` VARCHAR(255) DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `markup_percentage` INT DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
