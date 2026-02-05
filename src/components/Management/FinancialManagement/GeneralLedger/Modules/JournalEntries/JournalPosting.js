import React from 'react';
import Management from '../../../../../../pages/Management';

const JournalPosting = () => {
    return (
        <Management
            module="financial-management"
            subModule="general-ledger"
            component="journal-entries"
            initialFilters={[{ column: 'status', value: 'approved', active: true }]}
        />
    );
};

export default JournalPosting;
