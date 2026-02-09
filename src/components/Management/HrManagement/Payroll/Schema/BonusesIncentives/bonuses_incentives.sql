-- Source: frontend\src\components\Management\HrManagement\Payroll\BonusesIncentives.js
DROP TABLE IF EXISTS `bonuses_incentives`;
CREATE TABLE IF NOT EXISTS `bonuses_incentives` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `bonus_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `bonus_type` VARCHAR(100) DEFAULT NULL,
    `amount` INT DEFAULT NULL,
    `date_awarded` DATE DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `approved_by` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
