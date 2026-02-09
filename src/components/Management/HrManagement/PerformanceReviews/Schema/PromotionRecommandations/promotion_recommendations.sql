-- Source: frontend\src\components\Management\HrManagement\PerformanceReviews\PromotionRecommandations.js
DROP TABLE IF EXISTS `promotion_recommendations`;
CREATE TABLE IF NOT EXISTS `promotion_recommendations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `recommendation_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `current_role` VARCHAR(255) DEFAULT NULL,
    `recommended_role` VARCHAR(255) DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `submitted_by` VARCHAR(255) DEFAULT NULL,
    `date_submitted` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `approval_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
