import React, { useState, useEffect } from 'react';
import BaseManagementComponent from '../components/Management/Base';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import { useParams } from 'react-router-dom';

const getPath = (path) => {
    return path.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function ManagementComponent({ showAnalytics }) {
    const { module, subModule, component } = useParams();
    const capitalizedModuleName = getPath(module);
    const capitalizedSubModuleName = getPath(subModule);
    const capitalizedComponentName = getPath(component);

    const [config, setConfig] = useState(null);
    const [AnalysisComponent, setAnalysisComponent] = useState(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const { fieldsConfig, entityName, collectionName } = await import(`../components/Management/${capitalizedModuleName}/${capitalizedSubModuleName}/${capitalizedComponentName}`);
                const analysisModule = await import(`./Analysis/${capitalizedModuleName}/${capitalizedSubModuleName}/${capitalizedComponentName}`);
                const operations = helpersWrapper(collectionName);

                const headCells = Object.keys(fieldsConfig).map(key => ({
                    id: key,
                    label: fieldsConfig[key].label,
                }));

                setConfig({
                    fieldsConfig: fieldsConfig,
                    entityName: entityName,
                    fetchItems: operations.fetchItems,
                    addItem: operations.addItem,
                    updateItem: operations.updateItem,
                    deleteItem: operations.deleteItem,
                    headCells: headCells,
                });

                setAnalysisComponent(() => analysisModule.default);
            } catch (error) {
                console.error('Error loading modules:', error);
            }
        };

        loadConfig();
    }, [capitalizedComponentName, capitalizedModuleName, capitalizedSubModuleName]);

    // if (!config || !AnalysisComponent) {
    if (!config) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {showAnalytics ? (
                <AnalysisComponent fetchItems={config.fetchItems} fieldsConfig={config.fieldsConfig} />
            ) : (
                <BaseManagementComponent
                    fieldConfig={config.fieldsConfig}
                    entityName={config.entityName}
                    fetchItems={config.fetchItems}
                    addItem={config.addItem}
                    updateItem={config.updateItem}
                    deleteItem={config.deleteItem}
                    headCells={config.headCells}
                />
            )}
        </>
    );
}

export default ManagementComponent;
