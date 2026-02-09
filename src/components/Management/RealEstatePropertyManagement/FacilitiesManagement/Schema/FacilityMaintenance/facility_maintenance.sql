-- Source: frontend\src\components\Management\RealEstatePropertyManagement\FacilitiesManagement\FacilityMaintenance.js
DROP TABLE IF EXISTS `facility_maintenance`;
CREATE TABLE IF NOT EXISTS `facility_maintenance` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `maintenance_id` VARCHAR(255) DEFAULT NULL,
    `facility_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `task_name` VARCHAR(255) DEFAULT NULL,
    `scheduled_date` DATE DEFAULT NULL,
    `assigned_vendor` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `priority` VARCHAR(100) DEFAULT NULL,
    `cost_estimate` INT DEFAULT NULL,
    `actual_cost` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
