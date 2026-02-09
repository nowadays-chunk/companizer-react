-- Source: frontend\src\components\Management\IntellectualHumanCapital\KnowledgeBase\Sops.js
DROP TABLE IF EXISTS `standard_operating_procedures`;
CREATE TABLE IF NOT EXISTS `standard_operating_procedures` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `sop_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `review_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `author` VARCHAR(255) DEFAULT NULL,
    `approver` VARCHAR(255) DEFAULT NULL,
    `procedure_steps` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
