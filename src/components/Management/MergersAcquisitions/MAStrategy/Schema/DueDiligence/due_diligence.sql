-- Source: frontend\src\components\Management\MergersAcquisitions\MAStrategy\DueDiligence.js
DROP TABLE IF EXISTS `due_diligence`;
CREATE TABLE IF NOT EXISTS `due_diligence` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `due_diligence_id` VARCHAR(255) DEFAULT NULL,
    `target_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `category` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `findings_summary` VARCHAR(255) DEFAULT NULL,
    `risk_level` VARCHAR(100) DEFAULT NULL,
    `reviewer` VARCHAR(255) DEFAULT NULL,
    `report_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
