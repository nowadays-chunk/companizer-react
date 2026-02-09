-- Source: frontend\src\components\Management\HrManagement\Training\TrainingRecords.js
DROP TABLE IF EXISTS `hr_training_records`;
CREATE TABLE IF NOT EXISTS `hr_training_records` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `record_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `program_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `completion_date` DATE DEFAULT NULL,
    `score` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `certificate_url` VARCHAR(255) DEFAULT NULL,
    `e` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
