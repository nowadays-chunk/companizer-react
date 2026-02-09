-- Source: frontend\src\components\Management\HrManagement\Payroll\Payslips.js
DROP TABLE IF EXISTS `payslips`;
CREATE TABLE IF NOT EXISTS `payslips` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `payslip_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period_start` DATE DEFAULT NULL,
    `period_end` DATE DEFAULT NULL,
    `gross_pay` INT DEFAULT NULL,
    `net_pay` INT DEFAULT NULL,
    `deductions` INT DEFAULT NULL,
    `taxes` INT DEFAULT NULL,
    `payment_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
