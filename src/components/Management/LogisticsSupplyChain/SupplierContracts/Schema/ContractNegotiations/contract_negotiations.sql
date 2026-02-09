-- Source: frontend\src\components\Management\LogisticsSupplyChain\SupplierContracts\ContractNegotiations.js
DROP TABLE IF EXISTS `contract_negotiations`;
CREATE TABLE IF NOT EXISTS `contract_negotiations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `negotiation_id` VARCHAR(255) DEFAULT NULL,
    `supplier_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `negotiator` VARCHAR(255) DEFAULT NULL,
    `key_terms_discussed` VARCHAR(255) DEFAULT NULL,
    `target_savings` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
