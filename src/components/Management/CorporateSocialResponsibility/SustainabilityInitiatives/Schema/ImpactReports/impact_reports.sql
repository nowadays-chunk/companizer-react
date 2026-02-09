-- Source: frontend\src\components\Management\CorporateSocialResponsibility\SustainabilityInitiatives\ImpactReports.js
DROP TABLE IF EXISTS `impact_reports`;
CREATE TABLE IF NOT EXISTS `impact_reports` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `report_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `year` INT DEFAULT NULL,
    `file_url` VARCHAR(255) DEFAULT NULL,
    `prepared_by` VARCHAR(255) DEFAULT NULL,
    `key_highlights` VARCHAR(255) DEFAULT NULL,
    `published_date` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
