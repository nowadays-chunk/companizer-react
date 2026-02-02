import { useState, useEffect, useMemo } from 'react';
import api from '../utils/apiClient';
import RuleEngine from '../utils/RuleEngine';

/**
 * Custom hook for applying business rules to form data
 * @param {string} entityType - Entity type (table name)
 * @param {Object} formData - Current form data
 * @returns {Object} - { fieldStates, loading, error, refetch }
 */
const useBusinessRules = (entityType, formData) => {
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch rules for entity type
    useEffect(() => {
        if (!entityType) return;

        const fetchRules = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await api.get('/business-rules', {
                    params: { entityType, active: true }
                });
                setRules(data || []);
            } catch (err) {
                console.error('Failed to fetch business rules:', err);
                setError('Failed to load business rules');
            } finally {
                setLoading(false);
            }
        };

        fetchRules();
    }, [entityType]);

    // Compute field states based on current form data
    const fieldStates = useMemo(() => {
        if (!rules.length || !formData) return {};

        try {
            return RuleEngine.applyRules(rules, formData);
        } catch (err) {
            console.error('Error applying rules:', err);
            return {};
        }
    }, [rules, formData]);

    // Get dependencies for all rules (fields that trigger recalculation)
    const dependencies = useMemo(() => {
        const deps = new Set();
        rules.forEach(rule => {
            const ruleDeps = RuleEngine.getRuleDependencies(rule);
            ruleDeps.forEach(dep => deps.add(dep));
        });
        return Array.from(deps);
    }, [rules]);

    // Refetch rules
    const refetch = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await api.get('/business-rules', {
                params: { entityType, active: true }
            });
            setRules(data || []);
        } catch (err) {
            console.error('Failed to fetch business rules:', err);
            setError('Failed to load business rules');
        } finally {
            setLoading(false);
        }
    };

    return {
        fieldStates,
        rules,
        dependencies,
        loading,
        error,
        refetch
    };
};

export default useBusinessRules;
