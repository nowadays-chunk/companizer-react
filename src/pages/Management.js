import React, { useState, useEffect } from 'react';
import BaseManagementComponent from '../components/Base';
import { helpersWrapper } from '../utils/clientQueries';
import { useParams } from 'react-router-dom';

const getPath = (path) => {
    return path.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function ManagementComponent(props) {
    const params = useParams();
    const module = props.module || params.module;
    const subModule = props.subModule || params.subModule;
    const component = props.component || params.component;

    const capitalizedModuleName = getPath(module);
    const capitalizedSubModuleName = getPath(subModule);
    const capitalizedComponentName = getPath(component);

    const [config, setConfig] = useState(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const { fieldsConfig, entityName, collectionName, modules } = await import(`../components/Management/${capitalizedModuleName}/${capitalizedSubModuleName}/${capitalizedComponentName}`);
                const operations = helpersWrapper(collectionName);

                const headCells = Object.keys(fieldsConfig).map(key => ({
                    id: key,
                    label: fieldsConfig[key].label,
                }));

                setConfig({
                    fieldsConfig: fieldsConfig,
                    entityName: entityName,
                    collectionName: collectionName,
                    fetchItems: operations.fetchItems,
                    addItem: operations.addItem,
                    updateItem: operations.updateItem,
                    deleteItem: operations.deleteItem,
                    headCells: headCells,
                    modules: modules,
                });

                // Try to load module configuration
                try {
                    const configModule = await import(`../components/Management/${capitalizedModuleName}/${capitalizedSubModuleName}/Config/${capitalizedComponentName}Config`);
                    if (configModule && configModule.modules) {
                        setConfig(prev => ({ ...prev, modules: configModule.modules }));
                    }
                } catch (configError) {
                    // Config file doesn't exist, that's fine
                }
            } catch (error) {
                console.error('Error loading modules:', error);
            }
        };

        loadConfig();
    }, [capitalizedComponentName, capitalizedModuleName, capitalizedSubModuleName]);

    if (!config) {
        return <div>Loading...</div>;
    }

    return (
        <BaseManagementComponent
            fieldConfig={config.fieldsConfig}
            entityName={config.entityName}
            fetchItems={config.fetchItems}
            addItem={config.addItem}
            updateItem={config.updateItem}
            deleteItem={config.deleteItem}
            headCells={config.headCells}
            modules={config.modules}
            initialFilters={props.initialFilters}
            onConfigure={() => {
                window.open(`/#/${module}/${subModule}/${component}/configuration`, '_blank');
            }}
        />
    );
}

export default ManagementComponent;
