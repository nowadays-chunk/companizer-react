-- Source: frontend\src\components\Management\LogisticsSupplyChain\Procurement\SupplierBids.js
DROP TABLE IF EXISTS `supplier_bids`;
CREATE TABLE IF NOT EXISTS `supplier_bids` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `bid_id` VARCHAR(255) DEFAULT NULL,
    `rfp_id` VARCHAR(255) DEFAULT NULL,
    `supplier_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `bid_amount` INT DEFAULT NULL,
    `submission_date` DATE DEFAULT NULL,
    `delivery_time_days` INT DEFAULT NULL,
    `proposal_url` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
