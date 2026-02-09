-- Source: frontend\src\components\Management\OperationsAssetManagement\QualityControl\QualityStandards.js
DROP TABLE IF EXISTS `quality_standards`;
CREATE TABLE IF NOT EXISTS `quality_standards` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `standard_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `name` VARCHAR(255) DEFAULT NULL,
    `version` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `document_url` VARCHAR(255) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `review_date` DATE DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
