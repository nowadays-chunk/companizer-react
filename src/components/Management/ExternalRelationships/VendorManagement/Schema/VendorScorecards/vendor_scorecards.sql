-- Source: frontend\src\components\Management\ExternalRelationships\VendorManagement\VendorScorecards.js
DROP TABLE IF EXISTS `vendor_scorecards`;
CREATE TABLE IF NOT EXISTS `vendor_scorecards` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `scorecard_id` VARCHAR(255) DEFAULT NULL,
    `vendor_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period` VARCHAR(255) DEFAULT NULL,
    `average_score` INT DEFAULT NULL,
    `grade` VARCHAR(100) DEFAULT NULL,
    `quality_rating` INT DEFAULT NULL,
    `timeliness_rating` INT DEFAULT NULL,
    `cost_rating` INT DEFAULT NULL,
    `innovation_rating` INT DEFAULT NULL,
    `generated_date` DATE DEFAULT NULL,
    `review_meeting_date` DATE DEFAULT NULL,
    `e` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
