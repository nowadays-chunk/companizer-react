-- Source: frontend\src\components\Management\OperationsAssetManagement\SupplyChain\LogisticsRoutes.js
DROP TABLE IF EXISTS `logistics_routes`;
CREATE TABLE IF NOT EXISTS `logistics_routes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `route_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `route_name` VARCHAR(255) DEFAULT NULL,
    `start_point` VARCHAR(255) DEFAULT NULL,
    `end_point` VARCHAR(255) DEFAULT NULL,
    `estimated_distance_km` INT DEFAULT NULL,
    `estimated_time_hours` INT DEFAULT NULL,
    `carrier` VARCHAR(255) DEFAULT NULL,
    `vehicle_type` VARCHAR(100) DEFAULT NULL,
    `cost_per_trip` INT DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
