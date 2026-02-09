-- Source: frontend\src\components\Management\LogisticsSupplyChain\Procurement\PurchaseRequisitions.js
DROP TABLE IF EXISTS `purchase_requisitions`;
CREATE TABLE IF NOT EXISTS `purchase_requisitions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `requisition_id` VARCHAR(255) DEFAULT NULL,
    `requester_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `item_name` VARCHAR(255) DEFAULT NULL,
    `quantity` INT DEFAULT NULL,
    `estimated_cost` INT DEFAULT NULL,
    `required_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
