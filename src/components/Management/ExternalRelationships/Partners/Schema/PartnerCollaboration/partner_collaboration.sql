-- Source: frontend\src\components\Management\ExternalRelationships\Partners\PartnerCollaboration.js
DROP TABLE IF EXISTS `partner_collaboration`;
CREATE TABLE IF NOT EXISTS `partner_collaboration` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `collaboration_id` VARCHAR(255) DEFAULT NULL,
    `partner_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `project_name` VARCHAR(255) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `scope` VARCHAR(255) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `shared_resources` VARCHAR(255) DEFAULT NULL,
    `goals` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `budget_allocated` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
