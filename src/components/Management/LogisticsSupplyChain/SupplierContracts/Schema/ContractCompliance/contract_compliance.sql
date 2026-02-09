-- Source: frontend\src\components\Management\LogisticsSupplyChain\SupplierContracts\ContractCompliance.js
DROP TABLE IF EXISTS `contract_compliance`;
CREATE TABLE IF NOT EXISTS `contract_compliance` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `compliance_id` VARCHAR(255) DEFAULT NULL,
    `contract_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `audit_date` DATE DEFAULT NULL,
    `is_compliant` VARCHAR(255) DEFAULT NULL,
    `violation_details` VARCHAR(255) DEFAULT NULL,
    `auditor` VARCHAR(255) DEFAULT NULL,
    `penalty_assessed` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
