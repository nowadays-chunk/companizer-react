-- Source: frontend\src\components\Management\ExternalRelationships\Partners\JointVentures.js
DROP TABLE IF EXISTS `joint_ventures`;
CREATE TABLE IF NOT EXISTS `joint_ventures` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `jv_id` VARCHAR(255) DEFAULT NULL,
    `partner_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `venture_name` VARCHAR(255) DEFAULT NULL,
    `formation_date` DATE DEFAULT NULL,
    `dissolution_date` DATE DEFAULT NULL,
    `equity_split` INT DEFAULT NULL,
    `capital_contribution` INT DEFAULT NULL,
    `primary_contact` VARCHAR(255) DEFAULT NULL,
    `governing_law` VARCHAR(255) DEFAULT NULL,
    `operating_agreement_url` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
