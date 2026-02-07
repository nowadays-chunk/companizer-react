import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import BaseManagementComponent from '../components/Base';
import * as WorkflowRulesConfig from '../components/Management/entity_workflow_rules.js';
import { helpersWrapper } from '../utils/clientQueries';
import { Container, Typography, Box } from '@mui/material';

const WorkflowRulesManager = () => {
    const { module, subModule, targetEntity } = useParams();
    const rulesHelpers = useMemo(() => helpersWrapper('entity_workflow_rules'), []);

    if (!targetEntity) return <Typography>No entity specified.</Typography>;

    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Box mb={2}>
                <Typography variant="h4">Workflow Configuration: {targetEntity}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Define automated rules and validation logic for {targetEntity}.
                </Typography>
            </Box>

            <BaseManagementComponent
                entityName={`Rules for ${targetEntity}`}
                fieldConfig={{
                    ...WorkflowRulesConfig.fieldsConfig,
                    // Hide entity_type since it is implied by the URL/Context
                    entity_type: { ...WorkflowRulesConfig.fieldsConfig.entity_type, type: 'hidden' }
                }}

                fetchItems={async () => {
                    const allRules = await rulesHelpers.fetchItems();
                    return allRules.filter(r => r.entity_type === targetEntity);
                }}

                addItem={async (row) => {
                    const payload = { ...row, entity_type: targetEntity };
                    return rulesHelpers.addItem(payload);
                }}

                updateItem={async (id, row) => {
                    const payload = { ...row, entity_type: targetEntity };
                    return rulesHelpers.updateItem(id, payload);
                }}

                deleteItem={async (id) => rulesHelpers.deleteItem(id)}

                onAdd={() => window.open(`/#/${module}/${subModule}/${targetEntity}/configuration/create`, '_blank')}
                onEditItem={(id) => window.open(`/#/${module}/${subModule}/${targetEntity}/configuration/edit/${id}`, '_blank')}
                onViewItem={(id) => window.open(`/#/${module}/${subModule}/${targetEntity}/configuration/view/${id}`, '_blank')}
            />
        </Container>
    );
};

export default WorkflowRulesManager;
