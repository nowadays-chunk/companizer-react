-- Source: frontend\src\components\Management\InformationTechnology\NetworkManagement\NetworkTopology.js
DROP TABLE IF EXISTS `network_topology`;
CREATE TABLE IF NOT EXISTS `network_topology` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `node_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `node_name` VARCHAR(255) DEFAULT NULL,
    `node_type` VARCHAR(100) DEFAULT NULL,
    `ip_address` VARCHAR(255) DEFAULT NULL,
    `mac_address` VARCHAR(255) DEFAULT NULL,
    `location` VARCHAR(255) DEFAULT NULL,
    `connected_to` VARCHAR(255) DEFAULT NULL,
    `status` VARCHAR(100) DEFAULT NULL,
    `last_seen` DATE DEFAULT NULL,
    `firmware_version` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
