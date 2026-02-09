-- Source: frontend\src\components\Management\ProjectTaskManagement\Timesheets\TimesheetApprovals.js
DROP TABLE IF EXISTS `project_timesheet_approvals`;
CREATE TABLE IF NOT EXISTS `project_timesheet_approvals` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `approval_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `approver_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `period_start_date` DATE DEFAULT NULL,
    `period_end_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `total_hours` INT DEFAULT NULL,
    `submitted_date` DATE DEFAULT NULL,
    `approval_date` DATE DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `rejection_reason` VARCHAR(255) DEFAULT NULL,
    `project_breakdown` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
