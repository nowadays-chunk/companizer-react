-- Source: frontend\src\components\Management\SalesMarketing\Leads\LeadScoring.js
DROP TABLE IF EXISTS `lead_scoring`;
CREATE TABLE IF NOT EXISTS `lead_scoring` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `scoring_id` VARCHAR(255) DEFAULT NULL,
    `lead_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `total_score` INT DEFAULT NULL,
    `score_category` VARCHAR(100) DEFAULT NULL,
    `last_updated` DATE DEFAULT NULL,
    `demographic_score` INT DEFAULT NULL,
    `behavioral_score` INT DEFAULT NULL,
    `firmographic_score` INT DEFAULT NULL,
    `budget_score` INT DEFAULT NULL,
    `authority_score` INT DEFAULT NULL,
    `need_score` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
