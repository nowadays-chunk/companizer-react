-- Source: frontend\src\components\Management\InformationTechnology\NetworkManagement\BandwidthMonitoring.js
DROP TABLE IF EXISTS `bandwidth_monitoring`;
CREATE TABLE IF NOT EXISTS `bandwidth_monitoring` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `monitor_id` VARCHAR(255) DEFAULT NULL,
    `network_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `timestamp` VARCHAR(255) DEFAULT NULL,
    `upload_speed` INT DEFAULT NULL,
    `download_speed` INT DEFAULT NULL,
    `latency_ms` INT DEFAULT NULL,
    `packet_loss` INT DEFAULT NULL,
    `jitter` INT DEFAULT NULL,
    `peak_usage` INT DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `isp_provider` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
