-- Source: frontend\src\components\Management\HrManagement\Recruitment\OfferLetters.js
DROP TABLE IF EXISTS `offer_letters`;
CREATE TABLE IF NOT EXISTS `offer_letters` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `offer_id` VARCHAR(255) DEFAULT NULL,
    `applicant_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `offer_date` DATE DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `salary` INT DEFAULT NULL,
    `job_title` VARCHAR(255) DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `document_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
