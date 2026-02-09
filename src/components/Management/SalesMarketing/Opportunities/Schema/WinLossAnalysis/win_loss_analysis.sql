-- Source: frontend\src\components\Management\SalesMarketing\Opportunities\WinLossAnalysis.js
DROP TABLE IF EXISTS `win_loss_analysis`;
CREATE TABLE IF NOT EXISTS `win_loss_analysis` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `analysis_id` VARCHAR(255) DEFAULT NULL,
    `opportunity_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `outcome` VARCHAR(100) DEFAULT NULL,
    `reason_code` VARCHAR(100) DEFAULT NULL,
    `competitor_name` VARCHAR(255) DEFAULT NULL,
    `decision_maker_feedback` VARCHAR(255) DEFAULT NULL,
    `analysis_date` DATE DEFAULT NULL,
    `analyst_id` VARCHAR(255) DEFAULT NULL,
    `deal_size` INT DEFAULT NULL,
    `sales_cycle_days` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
