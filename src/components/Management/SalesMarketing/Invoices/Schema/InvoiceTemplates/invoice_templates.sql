-- Source: frontend\src\components\Management\SalesMarketing\Invoices\InvoiceTemplates.js
DROP TABLE IF EXISTS `invoice_templates`;
CREATE TABLE IF NOT EXISTS `invoice_templates` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `template_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `template_name` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `tags` VARCHAR(100) DEFAULT NULL,
    `html_content` VARCHAR(255) DEFAULT NULL,
    `is_default` VARCHAR(255) DEFAULT NULL,
    `created_by` VARCHAR(255) DEFAULT NULL,
    `last_modified_date` DATE DEFAULT NULL,
    `logo_url` VARCHAR(255) DEFAULT NULL,
    `footer_text` VARCHAR(255) DEFAULT NULL,
    `language` VARCHAR(100) DEFAULT NULL,
    `type` VARCHAR(255) DEFAULT NULL,
    `options` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
