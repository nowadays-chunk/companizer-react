-- Source: frontend\src\components\Management\GovernanceStrategy\CorporateGovernance\CompliancePolicies.js
DROP TABLE IF EXISTS `compliance_policies`;
CREATE TABLE IF NOT EXISTS `compliance_policies` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `policy_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `policy_name` VARCHAR(255) DEFAULT NULL,
    `category` VARCHAR(100) DEFAULT NULL,
    `effective_date` DATE DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `version` VARCHAR(255) DEFAULT NULL,
    `owner` VARCHAR(255) DEFAULT NULL,
    `review_date` DATE DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `document_url` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
