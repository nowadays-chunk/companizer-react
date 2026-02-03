
// src/components/Management/FinancialManagement/GeneralLedger/JournalEntryService.js

/**
 * Service to handle business logic for Journal Entries.
 * In a real application, this would interact with a backend API.
 * Here, it encapsulates the logic for validation, balancing, and state transitions.
 */

export const JournalEntryService = {

    /**
     * Creates a blank journal entry structure
     */
    createEmptyJournal: () => ({
        id: null, // Will be assigned on save
        journal_number: 'DRAFT',
        posting_date: new Date().toISOString().slice(0, 10),
        document_date: new Date().toISOString().slice(0, 10),
        reference_number: '',
        description: '',
        currency_code: 'USD',
        exchange_rate: 1.0,
        status: 'draft', // draft, posted, reversed
        source: 'MANUAL',
        category: 'GENERAL',
        lines: [
            // Start with two empty lines for convenience
            { id: 1, account_id: '', description: '', debit: 0, credit: 0, cost_center: '', project_id: '', tax_code: '' },
            { id: 2, account_id: '', description: '', debit: 0, credit: 0, cost_center: '', project_id: '', tax_code: '' }
        ]
    }),

    /**
     * Validates the journal entry before posting
     * @param {Object} journal 
     * @returns {Object} { isValid: boolean, errors: Array<string> }
     */
    validateJournal: (journal) => {
        const errors = [];

        if (!journal.posting_date) errors.push('Posting Date is required.');
        if (!journal.currency_code) errors.push('Currency is required.');
        if (!journal.lines || journal.lines.length < 2) errors.push('Journal must have at least 2 lines.');

        let totalDebit = 0;
        let totalCredit = 0;
        let hasAccount = true;

        journal.lines.forEach((line, index) => {
            const debit = parseFloat(line.debit) || 0;
            const credit = parseFloat(line.credit) || 0;

            if (!line.account_id && (debit !== 0 || credit !== 0)) {
                errors.push(`Line ${index + 1}: Account is required.`);
                hasAccount = false;
            }

            if (debit < 0 || credit < 0) {
                errors.push(`Line ${index + 1}: Negative amounts are not allowed.`);
            }

            if (debit > 0 && credit > 0) {
                // Technically some systems allow this, but usually it's one or the other per line
                errors.push(`Line ${index + 1}: Cannot have both Debit and Credit amounts.`);
            }

            totalDebit += debit;
            totalCredit += credit;
        });

        // Round to 2 decimals to avoid floating point issues
        totalDebit = Math.round(totalDebit * 100) / 100;
        totalCredit = Math.round(totalCredit * 100) / 100;

        if (totalDebit !== totalCredit) {
            errors.push(`Journal is not balanced. Total Debit: ${totalDebit}, Total Credit: ${totalCredit}. Difference: ${(totalDebit - totalCredit).toFixed(2)}`);
        }

        if (totalDebit === 0 && totalCredit === 0) {
            errors.push('Journal cannot be empty (Total amount is 0).');
        }

        return {
            isValid: errors.length === 0,
            errors,
            totals: { debit: totalDebit, credit: totalCredit }
        };
    },

    /**
     * Simulates posting to check for period locks or other backend constraints
     * @param {Object} journal 
     */
    simulatePosting: async (journal) => {
        // Mock backend check
        return new Promise((resolve) => {
            setTimeout(() => {
                const results = {
                    success: true,
                    warnings: []
                };

                // Example mocked validation
                const postingYear = new Date(journal.posting_date).getFullYear();
                if (postingYear < 2024) {
                    results.success = false;
                    results.errors = ['Fiscal Year ' + postingYear + ' is closed.'];
                }

                resolve(results);
            }, 500);
        });
    },

    /**
     * Finalizes the journal, essentially "Posting" it.
     * @param {Object} journal 
     * @returns {Object} Posted journal
     */
    postJournal: (journal) => {
        // In a real app, this would send to API.
        // Here we just mutate state to "posted"
        return {
            ...journal,
            status: 'posted',
            journal_number: 'JE-' + Math.floor(Math.random() * 100000), // Mock generation
            posted_at: new Date().toISOString(),
            posted_by: 'Current User' // Should come from context
        };
    }
};
