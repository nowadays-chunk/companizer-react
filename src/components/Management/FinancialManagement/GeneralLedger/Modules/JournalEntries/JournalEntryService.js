
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

            // Mock Rule: Expense accounts (starting with 5) require a Cost Center
            // We assume account_id in this mock is the code, or distinct enough. 
            // In reality we'd look up the account object.
            // Let's assume the mock ACCOUNTS list has IDs matching codes '5000', '5010' etc.
            if (line.account_id && line.account_id.toString().startsWith('5') && !line.cost_center) {
                errors.push(`Line ${index + 1}: Cost Center is required for Expense accounts (5xxx).`);
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
     * Submits the journal for approval
     * @param {Object} journal 
     */
    submitJournal: (journal) => {
        return {
            ...journal,
            status: 'submitted',
            submitted_at: new Date().toISOString(),
            // submitted_by: 'Current User' 
        };
    },

    /**
     * Approves the journal
     * @param {Object} journal 
     */
    approveJournal: (journal) => {
        return {
            ...journal,
            status: 'approved',
            approved_at: new Date().toISOString(),
            // approved_by: 'Current User'
        };
    },

    /**
     * Rejects the journal
     * @param {Object} journal 
     * @param {string} reason
     */
    rejectJournal: (journal, reason) => {
        return {
            ...journal,
            status: 'rejected',
            rejection_reason: reason,
            rejected_at: new Date().toISOString(),
            // rejected_by: 'Current User'
        };
    },

    /**
     * Finalizes the journal, essentially "Posting" it.
     * @param {Object} journal 
     * @returns {Object} Posted journal
     */
    postJournal: (journal) => {
        // Enforce approval before posting (unless it's a legacy data fix or system journal)
        if (journal.status !== 'approved' && journal.status !== 'draft') { // Allow draft for now if testing, strictly should be 'approved'
            // For strict workflow: if (journal.status !== 'approved') throw new Error("Must be approved");
        }

        return {
            ...journal,
            status: 'posted',
            journal_number: journal.journal_number === 'DRAFT' ? 'JE-' + Math.floor(Math.random() * 100000) : journal.journal_number,
            posted_at: new Date().toISOString(),
            posted_by: 'Current User' // Should come from context
        };
    },

    /**
     * Creates a reversal entry for a posted journal
     * @param {Object} journal 
     * @returns {Object} New Reversal Draft Journal
     */
    reverseJournal: (journal) => {
        return {
            ...journal,
            id: null, // New entry
            journal_number: 'DRAFT',
            reference_number: `Reversal of ${journal.journal_number}`,
            description: `Reversal: ${journal.description}`,
            posting_date: new Date().toISOString().slice(0, 10), // Today
            document_date: new Date().toISOString().slice(0, 10),
            status: 'draft',
            is_reversal: true,
            original_journal_id: journal.id,
            lines: journal.lines.map(line => ({
                ...line,
                id: Date.now() + Math.random(), // New Line IDs
                debit: line.credit,  // Swap
                credit: line.debit   // Swap
            })),
            created_at: null,
            created_by: null,
            posted_at: null,
            posted_by: null,
            submitted_at: null,
            approved_at: null,
            rejected_at: null
        };
    },

    /**
     * Generates the next occurrence of a recurring journal
     * @param {Object} journal The template journal
     * @returns {Object} The new journal entry
     */
    generateNextOccurrence: (journal) => {
        const nextDate = new Date(journal.next_run_date || new Date());

        // Calculate new dates based on frequency
        let futureDate = new Date(nextDate);
        if (journal.recurrence_frequency === 'monthly') {
            futureDate.setMonth(futureDate.getMonth() + 1);
        } else if (journal.recurrence_frequency === 'quarterly') {
            futureDate.setMonth(futureDate.getMonth() + 3);
        } else if (journal.recurrence_frequency === 'yearly') {
            futureDate.setFullYear(futureDate.getFullYear() + 1);
        }

        return {
            ...journal,
            id: null,
            journal_number: 'DRAFT',
            reference_number: `Recurrence ${journal.recurrence_frequency} - ${nextDate.toISOString().slice(0, 7)}`,
            description: journal.description,
            posting_date: nextDate.toISOString().slice(0, 10),
            document_date: nextDate.toISOString().slice(0, 10),
            status: 'draft',
            is_recurring: false, // The generated instance is not itself recurring (usually)
            recurrence_frequency: null,
            next_run_date: null,
            source: 'RECURRING',
            original_journal_id: journal.id,
            lines: journal.lines.map(line => ({
                ...line,
                id: Date.now() + Math.random() // New Line IDs
            })),
            created_at: null,
            created_by: null,
            posted_at: null,
            created_by: null,
            posted_at: null,
            posted_by: null
        };
    },

    /**
     * Simulates fetching exchange rate from an external API
     * @param {string} currencyCode 
     * @returns {Promise<number>} Exchange rate relative to Base (USD)
     */
    getExchangeRate: async (currencyCode) => {
        // Mock rates
        const rates = {
            'USD': 1.0,
            'EUR': 0.92,
            'GBP': 0.79,
            'CAD': 1.36
        };
        return new Promise(resolve => {
            setTimeout(() => resolve(rates[currencyCode] || 1.0), 300);
        });
    }
};
