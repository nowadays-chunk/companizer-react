-- Source: frontend\src\components\Management\HrManagement\Payroll\OvertimeManagement.js
DROP TABLE IF EXISTS `overtime_management`;
CREATE TABLE IF NOT EXISTS `overtime_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `overtime_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `hours` INT DEFAULT NULL,
    `rate_multiplier` INT DEFAULT NULL,
    `total_amount` INT DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
