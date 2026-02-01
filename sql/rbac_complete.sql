-- ============================================================================
-- RBAC System - Complete Database Schema
-- ============================================================================
-- This script creates all tables needed for Role-Based Access Control
-- Run this script to set up organizations, users, authorizations, and entity row stacks
-- ============================================================================

-- ============================================================================
-- 1. Organizations Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS organizations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(191) NOT NULL UNIQUE,
    domain VARCHAR(191) NOT NULL,
    email VARCHAR(191) NOT NULL,
    num_users INT NOT NULL DEFAULT 0,
    num_stores INT NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    tenant_id CHAR(36) NOT NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
    
    INDEX idx_org_name (name),
    INDEX idx_tenant (tenant_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 2. Users Table
-- ============================================================================
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

-- ============================================================================
-- 3. Authorizations Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS authorizations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    
    -- Who grants and who receives
    accountable_id BIGINT UNSIGNED NOT NULL COMMENT 'User who created this authorization',
    authorized_user_id BIGINT UNSIGNED NOT NULL COMMENT 'User receiving the authorization',
    
    -- What is authorized
    authorized_role VARCHAR(50) NULL COMMENT 'Role granted (super_admin, admin, manager, etc)',
    authorized_entity VARCHAR(191) NULL COMMENT 'Specific entity type authorized',
    authorized_page VARCHAR(191) NULL COMMENT 'Page/route authorized',
    authorized_actions JSON NULL COMMENT 'Array of actions: ["view","create","edit","delete","validate","approve"]',
    
    -- Specific entity row(s) authorization
    entity_type VARCHAR(191) NULL COMMENT 'Collection name (e.g., cash_flow_forecasts)',
    entity_row_id BIGINT UNSIGNED NULL COMMENT 'Specific row ID if single-row authorization',
    entity_rows_stack_id BIGINT UNSIGNED NULL COMMENT 'Stack ID for bulk row authorization',
    entity_row_processing_step VARCHAR(50) NULL COMMENT 'Workflow step restriction - auth invalid after this step',
    
    -- Time and operation bounds
    authorization_start_date DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    authorization_end_date DATETIME(6) NULL COMMENT 'Optional expiry date',
    authorization_end_operation VARCHAR(50) NULL COMMENT 'Operation that invalidates auth (e.g., "validated", "approved")',
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    notes TEXT NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
    
    INDEX idx_auth_user (authorized_user_id),
    INDEX idx_auth_entity (entity_type, entity_row_id),
    INDEX idx_auth_stack (entity_rows_stack_id),
    INDEX idx_auth_active (is_active, authorization_end_date),
    
    CONSTRAINT fk_auth_accountable FOREIGN KEY (accountable_id)
        REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_auth_user FOREIGN KEY (authorized_user_id)
        REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 4. Entity Rows Stack Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS entity_rows_stack (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    stack_id BIGINT UNSIGNED NOT NULL COMMENT 'Common ID grouping multiple rows',
    stack_name VARCHAR(191) NULL COMMENT 'Descriptive name for the stack',
    entity_type VARCHAR(191) NOT NULL COMMENT 'Collection name (e.g., vendor_invoices)',
    entity_row_id BIGINT UNSIGNED NOT NULL COMMENT 'ID of the entity row',
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    
    INDEX idx_stack (stack_id),
    INDEX idx_entity_row (entity_type, entity_row_id),
    INDEX idx_stack_entity (stack_id, entity_type),
    
    UNIQUE KEY unique_stack_row (stack_id, entity_type, entity_row_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- Role Definitions (for reference)
-- ============================================================================
/*
ROLE HIERARCHY (ascending permissions):
  - viewer           Read-only access
  - user             Basic operations
  - auditor          Read-only auditing
  - sales_manager    Sales operations management
  - hr_manager       HR operations management
  - accountant       Financial operations
  - manager          Department/entity management
  - admin            Organization-level administration
  - super_admin      Full system access
*/
