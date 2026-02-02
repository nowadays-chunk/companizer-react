/**
 * Business Rules Engine
 * Core logic for evaluating conditions and executing rule actions
 */

class RuleEngine {
    /**
     * Evaluate a condition against form data
     * @param {Object} condition - Condition object from rule
     * @param {Object} formData - Current form data
     * @returns {Boolean} - Whether condition is met
     */
    static evaluateCondition(condition, formData) {
        if (!condition) return true;
        if (condition.alwaysRun) return true;

        const { operator, field, value, compareField, conditions } = condition;

        // Handle compound conditions (AND/OR/NOT)
        if (operator === 'AND') {
            return conditions.every(c => this.evaluateCondition(c, formData));
        }
        if (operator === 'OR') {
            return conditions.some(c => this.evaluateCondition(c, formData));
        }
        if (operator === 'NOT') {
            return !this.evaluateCondition(conditions[0], formData);
        }

        // Get field values
        const fieldValue = formData[field];
        const compareValue = compareField ? formData[compareField] : value;

        // Evaluate comparison operators
        switch (operator) {
            case 'equals':
                return fieldValue == compareValue;
            case 'notEquals':
                return fieldValue != compareValue;
            case 'greaterThan':
                return Number(fieldValue) > Number(compareValue);
            case 'lessThan':
                return Number(fieldValue) < Number(compareValue);
            case 'greaterOrEqual':
                return Number(fieldValue) >= Number(compareValue);
            case 'lessOrEqual':
                return Number(fieldValue) <= Number(compareValue);
            case 'contains':
                return String(fieldValue).includes(String(compareValue));
            case 'notContains':
                return !String(fieldValue).includes(String(compareValue));
            case 'startsWith':
                return String(fieldValue).startsWith(String(compareValue));
            case 'endsWith':
                return String(fieldValue).endsWith(String(compareValue));
            case 'isEmpty':
                return !fieldValue || fieldValue === '';
            case 'isNotEmpty':
                return !!fieldValue && fieldValue !== '';
            case 'in':
                return Array.isArray(compareValue) && compareValue.includes(fieldValue);
            case 'notIn':
                return Array.isArray(compareValue) && !compareValue.includes(fieldValue);
            default:
                console.warn(`Unknown operator: ${operator}`);
                return false;
        }
    }

    /**
     * Execute a calculation formula
     * @param {Object} formula - Formula object
     * @param {Object} formData - Current form data
     * @returns {any} - Calculated value
     */
    static executeCalculation(formula, formData) {
        if (!formula) return null;

        const { type, operands, field, constant, left, right } = formula;

        // Direct field reference
        if (field) {
            return formData[field];
        }

        // Constant value
        if (constant !== undefined) {
            return constant;
        }

        // Arithmetic operations
        if (type === 'add') {
            const l = this.executeCalculation(left, formData);
            const r = this.executeCalculation(right, formData);
            return Number(l) + Number(r);
        }
        if (type === 'subtract') {
            const l = this.executeCalculation(left, formData);
            const r = this.executeCalculation(right, formData);
            return Number(l) - Number(r);
        }
        if (type === 'multiply') {
            const l = this.executeCalculation(left, formData);
            const r = this.executeCalculation(right, formData);
            return Number(l) * Number(r);
        }
        if (type === 'divide') {
            const l = this.executeCalculation(left, formData);
            const r = this.executeCalculation(right, formData);
            return Number(l) / Number(r);
        }
        if (type === 'modulo') {
            const l = this.executeCalculation(left, formData);
            const r = this.executeCalculation(right, formData);
            return Number(l) % Number(r);
        }

        // Array operations
        if (type === 'sum') {
            if (!operands) return 0;
            return operands.reduce((sum, op) => {
                return sum + Number(this.executeCalculation(op, formData));
            }, 0);
        }
        if (type === 'avg') {
            if (!operands || operands.length === 0) return 0;
            const sum = operands.reduce((s, op) => {
                return s + Number(this.executeCalculation(op, formData));
            }, 0);
            return sum / operands.length;
        }
        if (type === 'min') {
            if (!operands) return null;
            const values = operands.map(op => Number(this.executeCalculation(op, formData)));
            return Math.min(...values);
        }
        if (type === 'max') {
            if (!operands) return null;
            const values = operands.map(op => Number(this.executeCalculation(op, formData)));
            return Math.max(...values);
        }
        if (type === 'count') {
            return operands ? operands.length : 0;
        }

        // String operations
        if (type === 'concat') {
            if (!operands) return '';
            return operands.map(op => String(this.executeCalculation(op, formData))).join('');
        }
        if (type === 'uppercase') {
            const val = this.executeCalculation(operands[0], formData);
            return String(val).toUpperCase();
        }
        if (type === 'lowercase') {
            const val = this.executeCalculation(operands[0], formData);
            return String(val).toLowerCase();
        }

        // Conditional
        if (type === 'if_then_else') {
            const { condition, then, else: elseVal } = formula;
            const conditionMet = this.evaluateCondition(condition, formData);
            return conditionMet ?
                this.executeCalculation(then, formData) :
                this.executeCalculation(elseVal, formData);
        }

        return null;
    }

    /**
     * Apply all rules for an entity
     * @param {Array} rules - Array of rule objects
     * @param {Object} formData - Current form data
     * @returns {Object} - Field states { fieldName: { visible, required, value, error } }
     */
    static applyRules(rules, formData) {
        const fieldStates = {};

        // Sort by priority (higher first)
        const sortedRules = [...rules].sort((a, b) => (b.priority || 0) - (a.priority || 0));

        sortedRules.forEach(rule => {
            if (!rule.is_active) return;

            const { rule_type, target_field, condition_logic, action_config } = rule;

            // Parse JSON if needed
            const condition = typeof condition_logic === 'string' ?
                JSON.parse(condition_logic) : condition_logic;
            const action = typeof action_config === 'string' ?
                JSON.parse(action_config) : action_config;

            // Check if condition is met
            const conditionMet = this.evaluateCondition(condition, formData);

            // Initialize field state if not exists
            if (!fieldStates[target_field]) {
                fieldStates[target_field] = {
                    visible: true,
                    required: false,
                    value: undefined,
                    errors: []
                };
            }

            // Apply rule based on type
            switch (rule_type) {
                case 'visibility':
                    if (conditionMet) {
                        fieldStates[target_field].visible = action.visible !== false;
                    }
                    break;

                case 'required':
                    if (conditionMet) {
                        fieldStates[target_field].required = action.required !== false;
                        if (action.required && !formData[target_field]) {
                            fieldStates[target_field].errors.push(
                                action.error_message || `${target_field} is required`
                            );
                        }
                    }
                    break;

                case 'calculation':
                    if (conditionMet && action.formula) {
                        const calculatedValue = this.executeCalculation(action.formula, formData);
                        fieldStates[target_field].value = calculatedValue;
                        fieldStates[target_field].readOnly = true;
                    }
                    break;

                case 'validation':
                    if (!conditionMet) {
                        fieldStates[target_field].errors.push(
                            action.error_message || `Validation failed for ${target_field}`
                        );
                    }
                    break;

                case 'auto_fill':
                    if (conditionMet) {
                        const shouldSet = action.overwrite || !formData[target_field];
                        if (shouldSet) {
                            fieldStates[target_field].value = action.value;
                        }
                    }
                    break;
            }
        });

        return fieldStates;
    }

    /**
     * Get dependencies for a rule (fields that affect it)
     * @param {Object} rule - Rule object
     * @returns {Array} - Array of field names
     */
    static getRuleDependencies(rule) {
        const dependencies = new Set();

        const extractFields = (obj) => {
            if (!obj) return;

            if (typeof obj === 'object') {
                if (obj.field) dependencies.add(obj.field);
                if (obj.compareField) dependencies.add(obj.compareField);
                if (obj.conditions) obj.conditions.forEach(extractFields);
                if (obj.operands) obj.operands.forEach(extractFields);
                if (obj.left) extractFields(obj.left);
                if (obj.right) extractFields(obj.right);
            }
        };

        const condition = typeof rule.condition_logic === 'string' ?
            JSON.parse(rule.condition_logic) : rule.condition_logic;
        const action = typeof rule.action_config === 'string' ?
            JSON.parse(rule.action_config) : rule.action_config;

        extractFields(condition);
        if (action.formula) extractFields(action.formula);

        return Array.from(dependencies);
    }
}

export default RuleEngine;
