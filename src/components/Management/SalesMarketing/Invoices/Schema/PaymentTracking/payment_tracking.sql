-- Source: frontend\src\components\Management\SalesMarketing\Invoices\PaymentTracking.js
DROP TABLE IF EXISTS `payment_tracking`;
CREATE TABLE IF NOT EXISTS `payment_tracking` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `tracking_id` VARCHAR(255) DEFAULT NULL,
    `invoice_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `payment_date` DATE DEFAULT NULL,
    `amount_received` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `payment_method` VARCHAR(100) DEFAULT NULL,
    `transaction_reference` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `payer_name` VARCHAR(255) DEFAULT NULL,
    `bank_fees` INT DEFAULT NULL,
    `net_amount` INT DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
