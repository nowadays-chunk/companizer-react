-- Source: frontend\src\components\Management\SalesMarketing\ClientsCustomers\CustomerSatisfaction.js
DROP TABLE IF EXISTS `customer_satisfaction`;
CREATE TABLE IF NOT EXISTS `customer_satisfaction` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `csat_id` VARCHAR(255) DEFAULT NULL,
    `customer_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `score` INT DEFAULT NULL,
    `survey_date` DATE DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `product_id` VARCHAR(255) DEFAULT NULL,
    `interaction_id` VARCHAR(255) DEFAULT NULL,
    `agent_id` VARCHAR(255) DEFAULT NULL,
    `sentiment` VARCHAR(100) DEFAULT NULL,
    `is_resolved` VARCHAR(255) DEFAULT NULL,
    `response_time` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
