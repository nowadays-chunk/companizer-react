-- Source: frontend\src\components\Management\HrManagement\Recruitment\ApplicantTracking.js
DROP TABLE IF EXISTS `applicant_tracking`;
CREATE TABLE IF NOT EXISTS `applicant_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `applicant_id` VARCHAR(255) DEFAULT NULL,
    `job_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `first_name` VARCHAR(255) DEFAULT NULL,
    `last_name` VARCHAR(255) DEFAULT NULL,
    `email` VARCHAR(255) DEFAULT NULL,
    `stage` VARCHAR(100) DEFAULT NULL,
    `source` VARCHAR(255) DEFAULT NULL,
    `application_date` DATE DEFAULT NULL,
    `resume_url` VARCHAR(255) DEFAULT NULL,
    `phone` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
