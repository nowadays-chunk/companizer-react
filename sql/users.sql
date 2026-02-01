-- Users Table
-- Stores application users with role-based access

CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    uuid CHAR(36) NOT NULL UNIQUE,
    first_name VARCHAR(191) NOT NULL,
    last_name VARCHAR(191) NOT NULL,
    email VARCHAR(191) NOT NULL UNIQUE,
    password_hash VARCHAR(191) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    organization_id BIGINT UNSIGNED NOT NULL,
    entity_id BIGINT UNSIGNED NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
    
    INDEX idx_users_org (organization_id),
    INDEX idx_users_email (email),
    INDEX idx_users_role (role),
    
    CONSTRAINT fk_users_org FOREIGN KEY (organization_id)
        REFERENCES organizations(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
