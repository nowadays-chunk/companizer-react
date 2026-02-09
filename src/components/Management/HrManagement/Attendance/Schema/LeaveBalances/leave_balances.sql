-- Source: frontend\src\components\Management\HrManagement\Attendance\LeaveBalances.js
DROP TABLE IF EXISTS `leave_balances`;
CREATE TABLE IF NOT EXISTS `leave_balances` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `balance_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `leave_type` VARCHAR(100) DEFAULT NULL,
    `year` INT DEFAULT NULL,
    `total_days` INT DEFAULT NULL,
    `used_days` INT DEFAULT NULL,
    `remaining_days` INT DEFAULT NULL,
    `carry_over_days` INT DEFAULT NULL,
    `last_updated` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
