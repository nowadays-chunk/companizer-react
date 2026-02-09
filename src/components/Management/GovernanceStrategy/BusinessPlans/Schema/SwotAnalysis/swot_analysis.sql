-- Source: frontend\src\components\Management\GovernanceStrategy\BusinessPlans\SwotAnalysis.js
DROP TABLE IF EXISTS `swot_analysis`;
CREATE TABLE IF NOT EXISTS `swot_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `swot_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `strengths` VARCHAR(255) DEFAULT NULL,
    `weaknesses` VARCHAR(255) DEFAULT NULL,
    `opportunities` VARCHAR(255) DEFAULT NULL,
    `threats` VARCHAR(255) DEFAULT NULL,
    `analyst` VARCHAR(255) DEFAULT NULL,
    `related_product_id` VARCHAR(255) DEFAULT NULL,
    `conclusion` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
