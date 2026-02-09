-- Source: frontend\src\components\Management\ExternalRelationships\Partners\RevenueSharingAgreements.js
DROP TABLE IF EXISTS `revenue_sharing_agreements`;
CREATE TABLE IF NOT EXISTS `revenue_sharing_agreements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `agreement_id` VARCHAR(255) DEFAULT NULL,
    `partner_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `share_percentage` INT DEFAULT NULL,
    `basis_of_calculation` VARCHAR(100) DEFAULT NULL,
    `payment_frequency` VARCHAR(100) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `expiry_date` DATE DEFAULT NULL,
    `min_guarantee` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `product_scope` VARCHAR(255) DEFAULT NULL,
    `document_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
