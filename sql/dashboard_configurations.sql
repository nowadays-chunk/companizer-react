-- Dashboard Configurations Table
-- Stores user-specific dashboard layouts and widget configurations

CREATE TABLE IF NOT EXISTS dashboard_configurations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    layout JSON NOT NULL COMMENT 'Grid layout configuration with widget positions',
    widgets JSON NOT NULL COMMENT 'Array of widget configurations',
    is_default BOOLEAN DEFAULT FALSE COMMENT 'Whether this is the default for the user role',
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
    
    INDEX idx_user (user_id),
    INDEX idx_default (is_default),
    
    CONSTRAINT fk_dashboard_user FOREIGN KEY (user_id)
        REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample widget configuration structure:
-- {
--   "id": "widget-1",
--   "type": "kpi",
--   "config": {
--     "title": "Total Revenue",
--     "entity": "customer_invoices",
--     "metric": "sum",
--     "field": "total_price",
--     "refreshInterval": 300000
--   }
-- }

-- Sample layout structure:
-- [
--   {"i": "widget-1", "x": 0, "y": 0, "w": 3, "h": 2},
--   {"i": "widget-2", "x": 3, "y": 0, "w": 3, "h": 2}
-- ]
