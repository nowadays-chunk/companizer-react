import React from 'react';
import Management from '../../../../../../pages/Management';

const JournalAnalytics = () => {
    return (
        <Management
            module="financial-management"
            subModule="general-ledger"
            component="journal-entries"
            showAnalytics={true}
        />
    );
};

export default JournalAnalytics;
