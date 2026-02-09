-- Source: frontend\src\components\Management\CustomerSupport\Feedback\ProductReviews.js
DROP TABLE IF EXISTS `product_reviews`;
CREATE TABLE IF NOT EXISTS `product_reviews` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `review_id` VARCHAR(255) DEFAULT NULL,
    `product_id` VARCHAR(255) DEFAULT NULL,
    `customer_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `rating` INT DEFAULT NULL,
    `review_date` DATE DEFAULT NULL,
    `review_title` VARCHAR(255) DEFAULT NULL,
    `content` VARCHAR(255) DEFAULT NULL,
    `is_verified_purchase` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
