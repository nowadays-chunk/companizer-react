-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\CommunityEngagement\CorporateSocialResponsibility.js
DROP TABLE IF EXISTS `environmental_social_governance_csr`;
CREATE TABLE IF NOT EXISTS `environmental_social_governance_csr` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `csr_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `program_name` VARCHAR(255) DEFAULT NULL,
    `focus_area` VARCHAR(100) DEFAULT NULL,
    `budget_allocated` INT DEFAULT NULL,
    `start_year` INT DEFAULT NULL,
    `program_manager` VARCHAR(255) DEFAULT NULL,
    `partners` VARCHAR(255) DEFAULT NULL,
    `goals` VARCHAR(255) DEFAULT NULL,
    `achievements` VARCHAR(255) DEFAULT NULL,
    `website_url` VARCHAR(255) DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
