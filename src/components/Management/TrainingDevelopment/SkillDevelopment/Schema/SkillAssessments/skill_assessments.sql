-- Source: frontend\src\components\Management\TrainingDevelopment\SkillDevelopment\SkillAssessments.js
DROP TABLE IF EXISTS `skill_assessments`;
CREATE TABLE IF NOT EXISTS `skill_assessments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `assessment_id` VARCHAR(255) DEFAULT NULL,
    `employee_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `skill_name` VARCHAR(255) DEFAULT NULL,
    `proficiency_level` VARCHAR(100) DEFAULT NULL,
    `assessment_date` DATE DEFAULT NULL,
    `assessed_by` VARCHAR(255) DEFAULT NULL,
    `score` INT DEFAULT NULL,
    `target_level` VARCHAR(100) DEFAULT NULL,
    `gap_analysis` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
