-- Source: frontend\src\components\Management\SalesMarketing\Leads\LeadNurturing.js
DROP TABLE IF EXISTS `lead_nurturing`;
CREATE TABLE IF NOT EXISTS `lead_nurturing` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `nurture_id` VARCHAR(255) DEFAULT NULL,
    `lead_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `activity_type` VARCHAR(100) DEFAULT NULL,
    `activity_date` DATE DEFAULT NULL,
    `engagement_score` INT DEFAULT NULL,
    `campaign_step` INT DEFAULT NULL,
    `content_id` VARCHAR(255) DEFAULT NULL,
    `response_received` VARCHAR(255) DEFAULT NULL,
    `next_action_date` DATE DEFAULT NULL,
    `assigned_rep_id` VARCHAR(255) DEFAULT NULL,
    `notes` VARCHAR(255) DEFAULT NULL,
    `email_opened` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
