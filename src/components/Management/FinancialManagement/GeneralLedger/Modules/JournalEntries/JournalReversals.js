import React from 'react';
import Management from '../../../../../../pages/Management';

const JournalReversals = () => {
    return (
        <Management
            module="financial-management"
            subModule="general-ledger"
            component="journal-entries"
            initialFilters={[{ column: 'is_reversal', value: 'true', active: true }]}
        />
    );
};

export default JournalReversals;
