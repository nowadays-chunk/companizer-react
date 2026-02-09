-- Source: frontend\src\components\Management\IntellectualHumanCapital\KnowledgeBase\DocumentationManagement.js
DROP TABLE IF EXISTS `documentation_management`;
CREATE TABLE IF NOT EXISTS `documentation_management` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `doc_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `doc_name` VARCHAR(255) DEFAULT NULL,
    `version` VARCHAR(255) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `last_modified` DATE DEFAULT NULL,
    `file_type` VARCHAR(255) DEFAULT NULL,
    `size_kb` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
