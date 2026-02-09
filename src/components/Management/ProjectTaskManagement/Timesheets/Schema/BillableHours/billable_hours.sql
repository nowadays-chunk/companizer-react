-- Source: frontend\src\components\Management\ProjectTaskManagement\Timesheets\BillableHours.js
DROP TABLE IF EXISTS `billable_hours`;
CREATE TABLE IF NOT EXISTS `billable_hours` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `billable_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `hours` INT DEFAULT NULL,
    `rate` INT DEFAULT NULL,
    `total_amount` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `task_id` VARCHAR(255) DEFAULT NULL,
    `invoice_id` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `approved_by` VARCHAR(255) DEFAULT NULL,
    `e` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
