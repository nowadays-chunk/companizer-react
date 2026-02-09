-- Source: frontend\src\components\Management\ProjectTaskManagement\Projects\ResourceAllocation.js
DROP TABLE IF EXISTS `resource_allocation`;
CREATE TABLE IF NOT EXISTS `resource_allocation` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `allocation_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `resource_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `hours_allocated` INT DEFAULT NULL,
    `utilization_percentage` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `cost_center_id` VARCHAR(255) DEFAULT NULL,
    `manager_id` VARCHAR(255) DEFAULT NULL,
    `skill_required` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
