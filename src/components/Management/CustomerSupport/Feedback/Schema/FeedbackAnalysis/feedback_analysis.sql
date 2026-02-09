-- Source: frontend\src\components\Management\CustomerSupport\Feedback\FeedbackAnalysis.js
DROP TABLE IF EXISTS `feedback_analysis`;
CREATE TABLE IF NOT EXISTS `feedback_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `total_feedback_count` INT DEFAULT NULL,
    `average_score` INT DEFAULT NULL,
    `top_keywords` VARCHAR(255) DEFAULT NULL,
    `positive_count` INT DEFAULT NULL,
    `negative_count` INT DEFAULT NULL,
    `neutral_count` INT DEFAULT NULL,
    `trend_description` VARCHAR(255) DEFAULT NULL,
    `generated_date` DATE DEFAULT NULL,
    `product_id` VARCHAR(255) DEFAULT NULL,
    `region` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
