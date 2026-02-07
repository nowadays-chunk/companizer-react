import React, { useState, useEffect } from 'react';
import BaseManagementComponent from '../components/Base';
import { helpersWrapper } from '../utils/clientQueries';
import { useParams } from 'react-router-dom';

import { pathMappings } from '../utils/pathMappings';

const getPath = (path) => {
    return path.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function ManagementComponent(props) {
    const params = useParams();
    const module = props.module || params.module;
    const subModule = props.subModule || params.subModule;
    const component = props.component || params.component;

    const [error, setError] = useState(null);
    const [config, setConfig] = useState(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                setError(null);
                let importPath;
                let configPath;

                // Default 3-segment logic
                const capitalizedModuleName = getPath(module);
                const capitalizedSubModuleName = getPath(subModule);
                const capitalizedComponentName = getPath(component);
                importPath = `../components/Management/${capitalizedModuleName}/${capitalizedSubModuleName}/${capitalizedComponentName}.js`;
                configPath = `../components/Management/${capitalizedModuleName}/${capitalizedSubModuleName}/Config/${capitalizedComponentName}Config`;
                // Check if the module param matches a key in our path mappings (indicating an /apps/ route)
                // if (pathMappings[module]) {
                //     // Resolve path using mapping
                //     const relativePath = pathMappings[module];
                //     // The subModule param becomes the component name in this context
                //     const componentName = getPath(subModule);

                //     importPath = `../components/Management/${relativePath}/${componentName}.js`;
                //     // Attempt to guess config path - this is a best effort
                //     // We assume standard structure relative to the component
                //     configPath = `../components/Management/${relativePath}/Config/${componentName}Config`;
                // } else {

                // }

                console.log(`Attempting to load module from: ${importPath}`);

                const { fieldsConfig, entityName, collectionName, modules } = await import(importPath);


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

                // Try to load module configuration if using standard path
                if (configPath) {
                    try {
                        const configModule = await import(`${configPath}`);
                        if (configModule && configModule.modules) {
                            setConfig(prev => ({ ...prev, modules: configModule.modules }));
                        }
                    } catch (configError) {
                        // Config file doesn't exist, that's fine
                        console.warn(`Optional config not found at ${configPath}`);
                    }
                }
            } catch (error) {
                console.error('Error loading module:', error);
                setError(`Failed to load module: ${error.message}`);
            }
        };

        loadConfig();
    }, [module, subModule, component]);

    if (error) {
        return (
            <div style={{ padding: 20, color: 'red' }}>
                <h3>Error Loading Module</h3>
                <p>{error}</p>
                <p>Path parameters: {module} / {subModule} / {component}</p>
            </div>
        );
    }

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
