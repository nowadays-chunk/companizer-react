-- Source: frontend\src\components\Management\HrManagement\Payroll\SalaryStructure.js
DROP TABLE IF EXISTS `salary_structure`;
CREATE TABLE IF NOT EXISTS `salary_structure` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `structure_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `base_salary` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `frequency` VARCHAR(100) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `grade` VARCHAR(255) DEFAULT NULL,
    `housing_allowance` INT DEFAULT NULL,
    `transport_allowance` INT DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
