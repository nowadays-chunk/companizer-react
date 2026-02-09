-- Source: frontend\src\components\Management\CrisisRiskManagement\BusinessContinuity\DisasterRecoveryPlans.js
DROP TABLE IF EXISTS `disaster_recovery_plans`;
CREATE TABLE IF NOT EXISTS `disaster_recovery_plans` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `recovery_id` VARCHAR(255) DEFAULT NULL,
    `plan_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `system_name` VARCHAR(255) DEFAULT NULL,
    `recovery_tier` VARCHAR(100) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `backup_location` VARCHAR(255) DEFAULT NULL,
    `failover_procedure` VARCHAR(255) DEFAULT NULL,
    `primary_contact` VARCHAR(255) DEFAULT NULL,
    `secondary_contact` VARCHAR(255) DEFAULT NULL,
    `last_test_date` DATE DEFAULT NULL,
    `test_outcome` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
