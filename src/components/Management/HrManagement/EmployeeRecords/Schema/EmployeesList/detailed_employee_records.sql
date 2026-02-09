-- Source: frontend\src\components\Management\HrManagement\EmployeeRecords\EmployeesList.js
DROP TABLE IF EXISTS `detailed_employee_records`;
CREATE TABLE IF NOT EXISTS `detailed_employee_records` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `first_name` VARCHAR(255) DEFAULT NULL,
    `last_name` VARCHAR(255) DEFAULT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `job_title` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `manager_id` VARCHAR(255) DEFAULT NULL,
    `employment_type` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
