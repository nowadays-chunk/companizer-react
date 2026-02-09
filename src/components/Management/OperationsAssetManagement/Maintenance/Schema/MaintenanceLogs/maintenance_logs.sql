-- Source: frontend\src\components\Management\OperationsAssetManagement\Maintenance\MaintenanceLogs.js
DROP TABLE IF EXISTS `maintenance_logs`;
CREATE TABLE IF NOT EXISTS `maintenance_logs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `log_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `maintenance_date` DATE DEFAULT NULL,
    `performed_by` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `cost` INT DEFAULT NULL,
    `maintenance_type` VARCHAR(100) DEFAULT NULL,
    `duration_hours` INT DEFAULT NULL,
    `parts_used` VARCHAR(255) DEFAULT NULL,
    `next_maintenance_due` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
