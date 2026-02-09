-- Source: frontend\src\components\Management\EnvironmentalSocialGovernance\CommunityEngagement\NgoPartnerships.js
DROP TABLE IF EXISTS `ngo_partnerships`;
CREATE TABLE IF NOT EXISTS `ngo_partnerships` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `partnership_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `ngo_name` VARCHAR(255) DEFAULT NULL,
    `contact_person` VARCHAR(255) DEFAULT NULL,
    `partnership_type` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `annual_contribution` INT DEFAULT NULL,
    `objectives` VARCHAR(255) DEFAULT NULL,
    `impact_report_received` VARCHAR(255) DEFAULT NULL,
    `renewal_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
