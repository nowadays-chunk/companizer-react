-- RBAC Database Migration Script
-- Fixes missing organization_id and accountable_id columns
-- Run this to drop and recreate RBAC tables with correct schema

-- Drop existing tables (in reverse order of dependencies)
DROP TABLE IF EXISTS entity_rows_stack;
DROP TABLE IF EXISTS authorizations;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS organizations;

-- Now run the rbac_complete.sql file to recreate with correct schema
-- Or execute the statements from rbac_complete.sql
