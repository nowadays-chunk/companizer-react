-- Source: frontend\src\components\Management\IntellectualHumanCapital\RDProjects\ResearchProposals.js
DROP TABLE IF EXISTS `research_proposals`;
CREATE TABLE IF NOT EXISTS `research_proposals` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `proposal_id` VARCHAR(255) DEFAULT NULL,
    `submitter_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `research_area` VARCHAR(255) DEFAULT NULL,
    `submission_date` DATE DEFAULT NULL,
    `budget_requested` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `abstract` VARCHAR(255) DEFAULT NULL,
    `duration_months` INT DEFAULT NULL,
    `collaborators` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
