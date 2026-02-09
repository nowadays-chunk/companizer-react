-- Source: frontend\src\components\Management\IntellectualHumanCapital\RDProjects\ResearchOutputs.js
DROP TABLE IF EXISTS `research_outputs`;
CREATE TABLE IF NOT EXISTS `research_outputs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `output_id` VARCHAR(255) DEFAULT NULL,
    `project_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `output_type` VARCHAR(100) DEFAULT NULL,
    `date_produced` DATE DEFAULT NULL,
    `author_lead` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `file_url` VARCHAR(255) DEFAULT NULL,
    `confidentiality` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
