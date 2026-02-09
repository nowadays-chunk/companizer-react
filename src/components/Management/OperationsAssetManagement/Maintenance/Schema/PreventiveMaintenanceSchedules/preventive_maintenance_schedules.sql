-- Source: frontend\src\components\Management\OperationsAssetManagement\Maintenance\PreventiveMaintenanceSchedules.js
DROP TABLE IF EXISTS `preventive_maintenance_schedules`;
CREATE TABLE IF NOT EXISTS `preventive_maintenance_schedules` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `schedule_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `task_name` VARCHAR(255) DEFAULT NULL,
    `frequency` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `next_due_date` DATE DEFAULT NULL,
    `assigned_to` VARCHAR(255) DEFAULT NULL,
    `instructions` VARCHAR(255) DEFAULT NULL,
    `estimated_duration` INT DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `e` VARCHAR(255) DEFAULT NULL,
    `options` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
