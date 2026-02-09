-- Source: frontend\src\components\Management\SalesMarketing\Pricing\DiscountStructures.js
DROP TABLE IF EXISTS `discount_structures`;
CREATE TABLE IF NOT EXISTS `discount_structures` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `structure_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(100) DEFAULT NULL,
    `percentage` INT DEFAULT NULL,
    `min_quantity` INT DEFAULT NULL,
    `max_quantity` INT DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `customer_segment_id` VARCHAR(255) DEFAULT NULL,
    `approval_required` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
