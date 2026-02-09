-- Source: frontend\src\components\Management\SalesMarketing\Invoices\RecurringInvoices.js
DROP TABLE IF EXISTS `recurring_invoices`;
CREATE TABLE IF NOT EXISTS `recurring_invoices` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `recurring_id` VARCHAR(255) DEFAULT NULL,
    `customer_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `frequency` VARCHAR(100) DEFAULT NULL,
    `next_invoice_date` DATE DEFAULT NULL,
    `amount` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `start_date` DATE DEFAULT NULL,
    `end_date` DATE DEFAULT NULL,
    `last_generated_date` DATE DEFAULT NULL,
    `template_id` VARCHAR(255) DEFAULT NULL,
    `auto_send` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
