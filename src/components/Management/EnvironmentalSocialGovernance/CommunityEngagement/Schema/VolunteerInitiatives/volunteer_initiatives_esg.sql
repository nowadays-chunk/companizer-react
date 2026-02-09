-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\CommunityEngagement\VolunteerInitiatives.js
DROP TABLE IF EXISTS `volunteer_initiatives_esg`;
CREATE TABLE IF NOT EXISTS `volunteer_initiatives_esg` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `initiative_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `date_range` VARCHAR(255) DEFAULT NULL,
    `total_hours_contributed` INT DEFAULT NULL,
    `employee_participation_count` INT DEFAULT NULL,
    `tag` VARCHAR(100) DEFAULT NULL,
    `cause` VARCHAR(255) DEFAULT NULL,
    `organizer_id` VARCHAR(255) DEFAULT NULL,
    `feedback_summary` VARCHAR(255) DEFAULT NULL,
    `photos_link` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
