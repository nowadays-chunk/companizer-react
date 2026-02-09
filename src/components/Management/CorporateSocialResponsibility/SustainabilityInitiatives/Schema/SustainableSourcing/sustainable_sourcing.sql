-- Source: frontend\src\components\Management\CorporateSocialResponsibility\SustainabilityInitiatives\SustainableSourcing.js
DROP TABLE IF EXISTS `sustainable_sourcing`;
CREATE TABLE IF NOT EXISTS `sustainable_sourcing` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `sourcing_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `material` VARCHAR(255) DEFAULT NULL,
    `supplier` VARCHAR(255) DEFAULT NULL,
    `percentage_sustainable` INT DEFAULT NULL,
    `certification_type` VARCHAR(255) DEFAULT NULL,
    `volume_purchased` INT DEFAULT NULL,
    `cost_premium` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
