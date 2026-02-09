-- Source: frontend\src\components\Management\InformationTechnology\DataSecurity\AccessControls.js
DROP TABLE IF EXISTS `access_controls`;
CREATE TABLE IF NOT EXISTS `access_controls` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `control_id` VARCHAR(255) DEFAULT NULL,
    `system_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `user_role` VARCHAR(255) DEFAULT NULL,
    `permission_level` VARCHAR(100) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `last_review_date` DATE DEFAULT NULL,
    `approved_by` VARCHAR(255) DEFAULT NULL,
    `mfa_required` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
