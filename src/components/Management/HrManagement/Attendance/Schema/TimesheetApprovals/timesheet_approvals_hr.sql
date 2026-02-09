-- Source: frontend\src\components\Management\HrManagement\Attendance\TimesheetApprovals.js
DROP TABLE IF EXISTS `timesheet_approvals_hr`;
CREATE TABLE IF NOT EXISTS `timesheet_approvals_hr` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `approval_id` VARCHAR(255) DEFAULT NULL,
    `timesheet_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `approver_id` VARCHAR(255) DEFAULT NULL,
    `approval_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `rejection_reason` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
