-- Source: frontend\src\components\Management\CustomerSupport\Feedback\NetPromoterScore.js
DROP TABLE IF EXISTS `net_promoter_score`;
CREATE TABLE IF NOT EXISTS `net_promoter_score` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `nps_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `score_value` INT DEFAULT NULL,
    `nps_category` VARCHAR(100) DEFAULT NULL,
    `survey_date` DATE DEFAULT NULL,
    `customer_segment` VARCHAR(255) DEFAULT NULL,
    `campaign_id` VARCHAR(255) DEFAULT NULL,
    `comment` VARCHAR(255) DEFAULT NULL,
    `response_time_sec` INT DEFAULT NULL,
    `device_type` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
