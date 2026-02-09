-- Source: frontend\src\components\Management\HrManagement\WorkContracts\ContractTerminations.js
DROP TABLE IF EXISTS `contract_terminations`;
CREATE TABLE IF NOT EXISTS `contract_terminations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `termination_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `termination_date` DATE DEFAULT NULL,
    `reason` VARCHAR(100) DEFAULT NULL,
    `notice_period_served` VARCHAR(255) DEFAULT NULL,
    `exit_interview_completed` VARCHAR(255) DEFAULT NULL,
    `final_payout_amount` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
