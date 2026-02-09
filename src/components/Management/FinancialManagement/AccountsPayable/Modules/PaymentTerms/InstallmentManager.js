
import TermCalculator from './TermCalculator';

export const InstallmentManager = {
    /**
     * Splits an invoice amount into installments based on the plan.
     * @param {Array} installmentPlan - Array of { percent: 50, days_offset: 0 }
     * @param {number} totalAmount - Total Invoice Amount
     * @param {Date} baseDate - Invoice Date
     * @param {Object} termConfig - Full term config (to fallback to CalculateDueDate)
     */
    generateInstallments: (installmentPlan, totalAmount, baseDate, termConfig) => {
        if (!installmentPlan || !Array.isArray(installmentPlan) || installmentPlan.length === 0) {
            // No installments, return single full payment
            return [{
                seq: 1,
                amount: totalAmount,
                due_date: TermCalculator.calculateDueDate(termConfig, baseDate),
                percent: 100
            }];
        }

        const installments = [];
        let remainingAmount = totalAmount;

        installmentPlan.forEach((plan, index) => {
            // Calculate amount
            let portion = (totalAmount * plan.percent) / 100;

            // Handle rounding on last item to ensure sum matches exactly
            if (index === installmentPlan.length - 1) {
                portion = remainingAmount;
            } else {
                portion = Number(portion.toFixed(2));
                remainingAmount -= portion;
            }

            // Calculate Date regarding the specific installment offset
            // We clone the config and enforce fixed_days for the specific installment delay
            // If plan.days_offset is undefined, it might mean "immediate" or same as term.
            const offset = plan.days_offset !== undefined ? plan.days_offset : (termConfig.days_due || 0);

            const subTermConfig = {
                ...termConfig,
                days_due: offset,
                due_date_method: 'fixed_days' // Installments usually relative to base date
            };

            const dueDate = TermCalculator.calculateDueDate(subTermConfig, baseDate);

            installments.push({
                seq: index + 1,
                amount: portion,
                percent: plan.percent,
                due_date: dueDate
            });
        });

        return installments;
    }
};

export default InstallmentManager;
