-- Source: frontend\src\components\Management\OperationsAssetManagement\QualityControl\NonConformanceReports.js
DROP TABLE IF EXISTS `non_conformance_reports`;
CREATE TABLE IF NOT EXISTS `non_conformance_reports` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `ncr_id` VARCHAR(255) DEFAULT NULL,
    `item_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `detected_by` VARCHAR(255) DEFAULT NULL,
    `date_detected` DATE DEFAULT NULL,
    `severity` VARCHAR(100) DEFAULT NULL,
    `disposition` VARCHAR(100) DEFAULT NULL,
    `root_cause` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
