-- Source: frontend\src\components\Management\OperationsAssetManagement\Assets\AssetDepreciation.js
DROP TABLE IF EXISTS `asset_depreciation_ops`;
CREATE TABLE IF NOT EXISTS `asset_depreciation_ops` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NULL, 
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    `organization_id` VARCHAR(255) NOT NULL,
    `record_id` VARCHAR(255) DEFAULT NULL,
    `asset_id` VARCHAR(255) DEFAULT NULL,
    `accountable_id` VARCHAR(255) DEFAULT NULL,
    `fiscal_year` INT DEFAULT NULL,
    `depreciation_method` VARCHAR(100) DEFAULT NULL,
    `opening_book_value` INT DEFAULT NULL,
    `depreciation_expense` INT DEFAULT NULL,
    `closing_book_value` INT DEFAULT NULL,
    `useful_life` INT DEFAULT NULL,
    `salvage_value` INT DEFAULT NULL,
    `date_calculated` DATE DEFAULT NULL,
    `processing_step` VARCHAR(100) DEFAULT NULL,
    `total_price` INT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
