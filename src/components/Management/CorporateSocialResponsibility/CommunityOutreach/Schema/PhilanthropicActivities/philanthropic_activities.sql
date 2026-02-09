-- Source: frontend\src\components\Management\CorporateSocialResponsibility\CommunityOutreach\PhilanthropicActivities.js
DROP TABLE IF EXISTS `philanthropic_activities`;
CREATE TABLE IF NOT EXISTS `philanthropic_activities` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `activity_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `activity_name` VARCHAR(255) DEFAULT NULL,
    `type` VARCHAR(100) DEFAULT NULL,
    `amount_raised` INT DEFAULT NULL,
    `beneficiary` VARCHAR(255) DEFAULT NULL,
    `date` DATE DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
