-- Source: frontend\src\components\Management\CorporateSocialResponsibility\CommunityOutreach\CommunityInvestment.js
DROP TABLE IF EXISTS `community_investment`;
CREATE TABLE IF NOT EXISTS `community_investment` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `investment_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `initiative_name` VARCHAR(255) DEFAULT NULL,
    `amount_invested` INT DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `partner_org` VARCHAR(255) DEFAULT NULL,
    `beneficiaries` VARCHAR(255) DEFAULT NULL,
    `impact_description` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
