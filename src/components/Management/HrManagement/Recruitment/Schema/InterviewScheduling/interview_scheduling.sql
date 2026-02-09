-- Source: frontend\src\components\Management\HrManagement\Recruitment\InterviewScheduling.js
DROP TABLE IF EXISTS `interview_scheduling`;
CREATE TABLE IF NOT EXISTS `interview_scheduling` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `interview_id` VARCHAR(255) DEFAULT NULL,
    `applicant_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `interview_type` VARCHAR(100) DEFAULT NULL,
    `scheduled_date` DATETIME DEFAULT NULL,
    `interviewers` VARCHAR(255) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `duration_minutes` INT DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
