-- Source: frontend\src\components\Management\ComplianceLegal\Contracts\ContractObligations.js
DROP TABLE IF EXISTS `contract_obligations`;
CREATE TABLE IF NOT EXISTS `contract_obligations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `obligation_id` VARCHAR(255) DEFAULT NULL,
    `contract_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `party_responsible` VARCHAR(255) DEFAULT NULL,
    `penalty_clause` VARCHAR(255) DEFAULT NULL,
    `completion_evidence` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
