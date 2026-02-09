-- Source: frontend\src\components\Management\InformationTechnology\DataSecurity\DataEncryption.js
DROP TABLE IF EXISTS `data_encryption`;
CREATE TABLE IF NOT EXISTS `data_encryption` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `encryption_id` VARCHAR(255) DEFAULT NULL,
    `data_set_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `algorithm` VARCHAR(100) DEFAULT NULL,
    `key_rotation_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `encryption_level` VARCHAR(100) DEFAULT NULL,
    `compliance_standard` VARCHAR(255) DEFAULT NULL,
    `managed_by` VARCHAR(255) DEFAULT NULL,
    `last_audit_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
