-- Source: frontend\src\components\Management\GovernanceStrategy\CorporateGovernance\BoardResolutions.js
DROP TABLE IF EXISTS `board_resolutions`;
CREATE TABLE IF NOT EXISTS `board_resolutions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `resolution_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `resolution_number` VARCHAR(255) DEFAULT NULL,
    `title` VARCHAR(255) DEFAULT NULL,
    `adoption_date` DATE DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `full_text` VARCHAR(255) DEFAULT NULL,
    `voting_result` VARCHAR(255) DEFAULT NULL,
    `proposed_by` VARCHAR(255) DEFAULT NULL,
    `seconded_by` VARCHAR(255) DEFAULT NULL,
    `signed_by_chairman` VARCHAR(255) DEFAULT NULL,
    `e` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
