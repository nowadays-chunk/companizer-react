-- Source: frontend\src\components\Management\CustomerSupport\ServiceContracts\SupportEntitlements.js
DROP TABLE IF EXISTS `support_entitlements`;
CREATE TABLE IF NOT EXISTS `support_entitlements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `entitlement_id` VARCHAR(255) DEFAULT NULL,
    `contract_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `entitlement_name` VARCHAR(255) DEFAULT NULL,
    `total_units` INT DEFAULT NULL,
    `remaining_units` INT DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `service_level` VARCHAR(100) DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `overage_policy` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
