-- Source: frontend\src\components\Management\ComplianceLegal\Disputes\ArbitrationRecords.js
DROP TABLE IF EXISTS `arbitration_records`;
CREATE TABLE IF NOT EXISTS `arbitration_records` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `arbitration_id` VARCHAR(255) DEFAULT NULL,
    `dispute_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `arbitrator` VARCHAR(255) DEFAULT NULL,
    `hearing_date` DATE DEFAULT NULL,
    `institution` VARCHAR(255) DEFAULT NULL,
    `outcome` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
