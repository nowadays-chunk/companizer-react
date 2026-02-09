-- Source: frontend\src\components\Management\OperationsAssetManagement\QualityControl\InspectionRecords.js
DROP TABLE IF EXISTS `inspection_records`;
CREATE TABLE IF NOT EXISTS `inspection_records` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `inspection_id` VARCHAR(255) DEFAULT NULL,
    `item_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `inspection_date` DATE DEFAULT NULL,
    `inspector` VARCHAR(255) DEFAULT NULL,
    `result` VARCHAR(100) DEFAULT NULL,
    `sample_size` INT DEFAULT NULL,
    `defects_found` INT DEFAULT NULL,
    `severity` VARCHAR(100) DEFAULT NULL,
    `comments` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
