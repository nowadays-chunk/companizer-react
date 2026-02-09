-- Source: frontend\src\components\Management\CustomerSupport\Feedback\CustomerSurveys.js
DROP TABLE IF EXISTS `customer_surveys`;
CREATE TABLE IF NOT EXISTS `customer_surveys` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `survey_id` VARCHAR(255) DEFAULT NULL,
    `customer_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `survey_date` DATE DEFAULT NULL,
    `satisfaction_score` INT DEFAULT NULL,
    `nps_score` INT DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `survey_channel` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
