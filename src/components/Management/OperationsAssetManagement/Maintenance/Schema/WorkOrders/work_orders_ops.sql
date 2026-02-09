-- Source: frontend\src\components\Management\OperationsAssetManagement\Maintenance\WorkOrders.js
DROP TABLE IF EXISTS `work_orders_ops`;
CREATE TABLE IF NOT EXISTS `work_orders_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `order_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `requested_by` VARCHAR(255) DEFAULT NULL,
    `request_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `assigned_technician` VARCHAR(255) DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
