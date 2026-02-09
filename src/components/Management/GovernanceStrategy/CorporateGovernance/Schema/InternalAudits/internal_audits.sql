-- Source: frontend\src\components\Management\GovernanceStrategy\CorporateGovernance\InternalAudits.js
DROP TABLE IF EXISTS `internal_audits`;
CREATE TABLE IF NOT EXISTS `internal_audits` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `audit_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `audit_date` DATE DEFAULT NULL,
    `auditor_name` VARCHAR(255) DEFAULT NULL,
    `scope` VARCHAR(255) DEFAULT NULL,
    `findings` VARCHAR(255) DEFAULT NULL,
    `risk_rating` VARCHAR(100) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
