-- Source: frontend\src\components\Management\OperationsAssetManagement\Warehouses\WarehouseLayouts.js
DROP TABLE IF EXISTS `warehouse_layouts`;
CREATE TABLE IF NOT EXISTS `warehouse_layouts` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `layout_id` VARCHAR(255) DEFAULT NULL,
    `warehouse_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `layout_name` VARCHAR(255) DEFAULT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `blueprint_url` VARCHAR(255) DEFAULT NULL,
    `zones_count` INT DEFAULT NULL,
    `total_area_sqm` INT DEFAULT NULL,
    `last_updated` DATE DEFAULT NULL,
    `ype` VARCHAR(255) DEFAULT NULL,
    `faker` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
