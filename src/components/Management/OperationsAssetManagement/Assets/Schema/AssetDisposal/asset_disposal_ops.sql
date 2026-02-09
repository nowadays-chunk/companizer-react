-- Source: frontend\src\components\Management\OperationsAssetManagement\Assets\AssetDisposal.js
DROP TABLE IF EXISTS `asset_disposal_ops`;
CREATE TABLE IF NOT EXISTS `asset_disposal_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `disposal_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `disposal_date` DATE DEFAULT NULL,
    `method` VARCHAR(100) DEFAULT NULL,
    `sale_price` INT DEFAULT NULL,
    `book_value_at_disposal` INT DEFAULT NULL,
    `gain_loss` INT DEFAULT NULL,
    `buyer` VARCHAR(255) DEFAULT NULL,
    `authorized_by` VARCHAR(255) DEFAULT NULL,
    `reason` VARCHAR(255) DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
