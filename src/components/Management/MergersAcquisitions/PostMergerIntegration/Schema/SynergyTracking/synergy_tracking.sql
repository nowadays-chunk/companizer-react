-- Source: frontend\src\components\Management\MergersAcquisitions\PostMergerIntegration\SynergyTracking.js
DROP TABLE IF EXISTS `synergy_tracking`;
CREATE TABLE IF NOT EXISTS `synergy_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `target_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `synergy_category` VARCHAR(100) DEFAULT NULL,
    `projected_value` INT DEFAULT NULL,
    `realized_value` INT DEFAULT NULL,
    `measurement_period` VARCHAR(255) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `variance_reason` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
