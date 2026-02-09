
import { addDays, endOfMonth, isMatch, format } from 'date-fns';

export const TermCalculator = {
    /**
     * Calculates the due date based on the term configuration and a base date.
     * @param {Object} termConfig - The payment term configuration object (from PaymentTerms.js schema).
     * @param {Date|string} baseDateInput - The starting date (Invoice Date, GRN Date, etc.).
     * @returns {Date} The calculated due date.
     */
    calculateDueDate: (termConfig, baseDateInput) => {
        if (!termConfig || !baseDateInput) return null;

        const baseDate = new Date(baseDateInput);
        let dueDate = new Date(baseDate);

        // 1. Apply Logic based on due_date_method
        switch (termConfig.due_date_method) {
            case 'fixed_days':
                // Standard "Net X Days"
                dueDate = addDays(baseDate, termConfig.days_due || 0);
                break;

            case 'end_of_month':
                // "EOM" or "Net X EOM"
                // Logic: "End of the month after X days offset".
                const intermediateDate = addDays(baseDate, termConfig.days_due || 0);

                // Check Cutoff if defined
                if (termConfig.cutoff_day && baseDate.getDate() > termConfig.cutoff_day) {
                    // If past cutoff, add an extra month logic?
                    // Standard EOM often implies: If before 25th, end of this month. If after, end of next.
                    // Here we treat cutoff generally as "move to next cycle"
                    // Ideally we'd use 'addMonths' but simple setMonth works for now.
                    intermediateDate.setMonth(intermediateDate.getMonth() + 1);
                }

                dueDate = endOfMonth(intermediateDate);
                break;

            case 'day_of_month':
                // "15th of next month"
                // Logic: Go to next month (or offset months), set date to X.
                dueDate.setMonth(dueDate.getMonth() + 1);
                dueDate.setDate(termConfig.days_due || 15);
                break;

            case 'fixed_date':
                // Specific date
                // Ideally this would come from a specific 'fixed_date' field in the invoice or term, 
                // but for generic terms it's rare.
                break;

            default:
                break;
        }

        return dueDate;
    },

    // Helper to format consistent dates
    formatDate: (date) => {
        return date ? format(date, 'yyyy-MM-dd') : '';
    }
};

export default TermCalculator;
