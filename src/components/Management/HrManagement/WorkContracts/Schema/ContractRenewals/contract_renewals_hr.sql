-- Source: frontend\src\components\Management\HrManagement\WorkContracts\ContractRenewals.js
DROP TABLE IF EXISTS `contract_renewals_hr`;
CREATE TABLE IF NOT EXISTS `contract_renewals_hr` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `renewal_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `old_contract_end` DATE DEFAULT NULL,
    `new_contract_start` DATE DEFAULT NULL,
    `new_contract_end` DATE DEFAULT NULL,
    `salary_revision` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
