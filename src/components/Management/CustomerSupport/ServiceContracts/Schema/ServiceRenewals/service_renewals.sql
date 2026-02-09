-- Source: frontend\src\components\Management\CustomerSupport\ServiceContracts\ServiceRenewals.js
DROP TABLE IF EXISTS `service_renewals`;
CREATE TABLE IF NOT EXISTS `service_renewals` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `renewal_id` VARCHAR(255) DEFAULT NULL,
    `contract_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `current_expiry_date` DATE DEFAULT NULL,
    `renewal_date` DATE DEFAULT NULL,
    `renewal_cost` INT DEFAULT NULL,
    `currency` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `customer_contact_id` VARCHAR(255) DEFAULT NULL,
    `reminder_sent` VARCHAR(255) DEFAULT NULL,
    `auto_renew` VARCHAR(255) DEFAULT NULL,
    `term_extension_months` INT DEFAULT NULL,
    `discount_applied` INT DEFAULT NULL,
    `sales_rep_id` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
