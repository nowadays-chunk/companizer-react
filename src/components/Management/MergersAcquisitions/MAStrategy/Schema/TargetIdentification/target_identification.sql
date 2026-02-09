-- Source: frontend\src\components\Management\MergersAcquisitions\MAStrategy\TargetIdentification.js
DROP TABLE IF EXISTS `target_identification`;
CREATE TABLE IF NOT EXISTS `target_identification` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `target_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `target_company_name` VARCHAR(255) DEFAULT NULL,
    `industry` VARCHAR(255) DEFAULT NULL,
    `region` VARCHAR(255) DEFAULT NULL,
    `revenue` INT DEFAULT NULL,
    `ebitda` INT DEFAULT NULL,
    `strategic_fit` VARCHAR(100) DEFAULT NULL,
    `contact_person` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
