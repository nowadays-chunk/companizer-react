-- Source: frontend\src\components\Management\TrainingDevelopment\LearningManagement\CertificationTracking.js
DROP TABLE IF EXISTS `certification_tracking`;
CREATE TABLE IF NOT EXISTS `certification_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `certification_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `cert_name` VARCHAR(255) DEFAULT NULL,
    `issuing_org` VARCHAR(255) DEFAULT NULL,
    `issue_date` DATE DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `credential_id` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `verification_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
