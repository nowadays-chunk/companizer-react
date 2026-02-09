-- Source: frontend\src\components\Management\SalesMarketing\ClientsCustomers\CustomerHistory.js
DROP TABLE IF EXISTS `customer_history`;
CREATE TABLE IF NOT EXISTS `customer_history` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `history_id` VARCHAR(255) DEFAULT NULL,
    `customer_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `event_type` VARCHAR(100) DEFAULT NULL,
    `event_date` DATE DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `related_order_id` VARCHAR(255) DEFAULT NULL,
    `agent_id` VARCHAR(255) DEFAULT NULL,
    `duration_minutes` INT DEFAULT NULL,
    `channel` VARCHAR(255) DEFAULT NULL,
    `outcome` VARCHAR(255) DEFAULT NULL,
    `touchpoint_score` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
