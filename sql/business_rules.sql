-- Business Rules Table
-- Stores configurable business rules for dynamic entity behavior

CREATE TABLE business_rules (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  entity_type VARCHAR(100) NOT NULL COMMENT 'Table/entity name this rule applies to',
  rule_name VARCHAR(255) NOT NULL COMMENT 'Human-readable rule name',
  rule_type ENUM('visibility', 'required', 'calculation', 'validation', 'auto_fill') NOT NULL COMMENT 'Type of rule',
  target_field VARCHAR(100) NOT NULL COMMENT 'Field affected by this rule',
  condition_logic JSON NOT NULL COMMENT 'Rule condition in JSON format',
  action_config JSON NOT NULL COMMENT 'Action to perform when condition is met',
  priority INT DEFAULT 0 COMMENT 'Execution priority (higher = earlier)',
  is_active BOOLEAN DEFAULT TRUE COMMENT 'Whether rule is currently active',
  description TEXT COMMENT 'Rule description',
  created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
  updated_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  
  INDEX idx_entity_type (entity_type),
  INDEX idx_target_field (target_field),
  INDEX idx_rule_type (rule_type),
  INDEX idx_is_active (is_active),
  INDEX idx_priority (priority)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Example rules:

-- Visibility Rule: Show payment_method when status = 'paid'
INSERT INTO business_rules (entity_type, rule_name, rule_type, target_field, condition_logic, action_config, priority) VALUES
('vendor_invoices', 'Show payment method when paid', 'visibility', 'payment_method', 
'{"operator": "equals", "field": "status", "value": "paid"}',
'{"visible": true}', 10);

-- Required Rule: Payment method required when paid
INSERT INTO business_rules (entity_type, rule_name, rule_type, target_field, condition_logic, action_config, priority) VALUES
('vendor_invoices', 'Payment method required when paid', 'required', 'payment_method',
'{"operator": "equals", "field": "status", "value": "paid"}',
'{"required": true, "error_message": "Payment method is required for paid invoices"}', 10);

-- Calculation Rule: Calculate total with tax
INSERT INTO business_rules (entity_type, rule_name, rule_type, target_field, condition_logic, action_config, priority) VALUES
('vendor_invoices', 'Calculate total with tax', 'calculation', 'total_amount',
'{"alwaysRun": true}',
'{"formula": {"type": "multiply", "operands": [{"field": "subtotal"}, {"type": "add", "operands": [1, {"field": "tax_rate"}]}]}}', 5);

-- Validation Rule: Due date after invoice date
INSERT INTO business_rules (entity_type, rule_name, rule_type, target_field, condition_logic, action_config, priority) VALUES
('vendor_invoices', 'Due date must be after invoice date', 'validation', 'due_date',
'{"operator": "greaterThan", "field": "due_date", "compareField": "invoice_date"}',
'{"error_message": "Due date must be after invoice date"}', 10);

-- Auto-fill Rule: Set default payment terms
INSERT INTO business_rules (entity_type, rule_name, rule_type, target_field, condition_logic, action_config, priority) VALUES
('customer_invoices', 'Set default payment terms for enterprise', 'auto_fill', 'payment_terms',
'{"operator": "equals", "field": "customer_type", "value": "enterprise"}',
'{"value": "net_60", "overwrite": false}', 10);
