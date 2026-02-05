import React from 'react';
import Management from '../../../../../../pages/Management';

const JournalApprovals = () => {
    return (
        <Management
            module="financial-management"
            subModule="general-ledger"
            component="journal-entries"
            initialFilters={[{ column: 'status', value: 'submitted', active: true }]}
        />
    );
};

export default JournalApprovals;
