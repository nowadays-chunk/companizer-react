-- Source: frontend\src\components\Management\InformationTechnology\SoftwareManagement\VersionControl.js
DROP TABLE IF EXISTS `version_control`;
CREATE TABLE IF NOT EXISTS `version_control` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `version_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `version_number` VARCHAR(255) DEFAULT NULL,
    `release_date` DATE DEFAULT NULL,
    `release_notes` VARCHAR(255) DEFAULT NULL,
    `branch_name` VARCHAR(255) DEFAULT NULL,
    `commit_hash` VARCHAR(255) DEFAULT NULL,
    `author` VARCHAR(255) DEFAULT NULL,
    `is_stable` VARCHAR(255) DEFAULT NULL,
    `download_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
