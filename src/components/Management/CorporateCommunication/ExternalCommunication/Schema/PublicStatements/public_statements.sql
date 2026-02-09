-- Source: frontend\src\components\Management\CorporateCommunication\ExternalCommunication\PublicStatements.js
DROP TABLE IF EXISTS `public_statements`;
CREATE TABLE IF NOT EXISTS `public_statements` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `statement_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `topic` VARCHAR(255) DEFAULT NULL,
    `spokesperson` VARCHAR(255) DEFAULT NULL,
    `statement_text` VARCHAR(255) DEFAULT NULL,
    `date_issued` DATE DEFAULT NULL,
    `context` VARCHAR(255) DEFAULT NULL,
    `url_link` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
