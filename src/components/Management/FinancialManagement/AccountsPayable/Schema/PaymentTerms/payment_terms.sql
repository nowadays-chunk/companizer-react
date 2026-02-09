-- Source: frontend\src\components\Management\FinancialManagement\AccountsPayable\PaymentTerms.js
DROP TABLE IF EXISTS `payment_terms`;
CREATE TABLE IF NOT EXISTS `payment_terms` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `term_name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `is_active` VARCHAR(255) DEFAULT NULL,
    `is_default` VARCHAR(255) DEFAULT NULL,
    `effective_from` DATE DEFAULT NULL,
    `effective_to` DATE DEFAULT NULL,
    `due_date_method` VARCHAR(100) NOT NULL,
    `due_date_basis` VARCHAR(100) DEFAULT NULL,
    `days_due` INT DEFAULT NULL,
    `cutoff_day` INT DEFAULT NULL,
    `discount_rules` TEXT DEFAULT NULL,
    `penalty_rules` TEXT DEFAULT NULL,
    `installment_plan` TEXT DEFAULT NULL,
    `term_category` VARCHAR(100) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
