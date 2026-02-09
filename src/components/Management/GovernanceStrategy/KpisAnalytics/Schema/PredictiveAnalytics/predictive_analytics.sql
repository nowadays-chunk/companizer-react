-- Source: frontend\src\components\Management\GovernanceStrategy\KpisAnalytics\PredictiveAnalytics.js
DROP TABLE IF EXISTS `predictive_analytics`;
CREATE TABLE IF NOT EXISTS `predictive_analytics` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `prediction_id` VARCHAR(255) DEFAULT NULL,
    `model_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `prediction_target` VARCHAR(255) DEFAULT NULL,
    `predicted_value` INT DEFAULT NULL,
    `confidence_score` INT DEFAULT NULL,
    `prediction_date` DATE DEFAULT NULL,
    `model_version` VARCHAR(255) DEFAULT NULL,
    `input_parameters` VARCHAR(255) DEFAULT NULL,
    `actual_value` INT DEFAULT NULL,
    `accuracy` INT DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
