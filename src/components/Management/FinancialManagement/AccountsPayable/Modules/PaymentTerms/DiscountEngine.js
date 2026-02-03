
import { addDays } from 'date-fns';

export const DiscountEngine = {
    /**
     * Calculates available discount based on payment date.
     * @param {Array} discountRules - Array of { days: 10, percent: 2.0 }
     * @param {number} totalAmount - Invoice Total
     * @param {Date} invoiceDate - Base date
     * @param {Date} [paymentDate] - Date of payment (defaults to 'now')
     */
    calculateDiscount: (discountRules, totalAmount, invoiceDate, paymentDate = new Date()) => {
        if (!discountRules || !Array.isArray(discountRules) || discountRules.length === 0) {
            return { discountAmount: 0, discountPercent: 0, status: 'unavailable' };
        }

        const payDate = new Date(paymentDate);
        const invDate = new Date(invoiceDate);
        const diffTime = Math.abs(payDate - invDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Sort rules by available days ascending (tightest window first)
        const sortedRules = [...discountRules].sort((a, b) => a.days - b.days);

        let applicableRule = null;
        // Check finding the "best" valid rule users fall into
        // Usually, 2% if < 10 days, 1% if < 20 days.
        // If I pay on day 5, I qualify for both? Technically yes, but I get the best one.
        // We iterate and keep the last one that matches? Or the first? 
        // If sorted 10, 20: 5 <= 10 (match), 5 <= 20 (match). 
        // We want the highest percent ideally.

        // Let's sort by percent descending instead to simplify "best deal".
        const bestRules = [...discountRules].sort((a, b) => b.percent - a.percent);

        for (const rule of bestRules) {
            if (diffDays <= rule.days) {
                applicableRule = rule;
                break;
            }
        }

        if (applicableRule) {
            const discountVal = (totalAmount * applicableRule.percent) / 100;
            return {
                discountAmount: Number(discountVal.toFixed(2)),
                discountPercent: applicableRule.percent,
                status: 'applied',
                expiryDate: addDays(invDate, applicableRule.days)
            };
        }

        return { discountAmount: 0, discountPercent: 0, status: 'expired' };
    }
};
