-- Source: frontend\src\components\Management\OperationsAssetManagement\QualityControl\CorrectiveActions.js
DROP TABLE IF EXISTS `corrective_actions`;
CREATE TABLE IF NOT EXISTS `corrective_actions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `action_id` VARCHAR(255) DEFAULT NULL,
    `ncr_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `assigned_to` VARCHAR(255) DEFAULT NULL,
    `due_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `verification_date` DATE DEFAULT NULL,
    `verified_by` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
