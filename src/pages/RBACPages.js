// RBAC Page Routes
// These pages are outside the dynamic Management loading structure

import React from 'react';
import BaseManagementComponent from '../components/Management/Base';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';
import * as OrganizationsConfig from '../components/RBAC/Organizations';
import * as UsersConfig from '../components/RBAC/Users';
import * as AuthorizationsConfig from '../components/RBAC/Authorizations';
import * as EntityRowsStackConfig from '../components/RBAC/EntityRowsStack';

// Organizations Page - /management/organizations
export const OrganizationsPage = () => {
    const { fetchItems, addItem, updateItem, deleteItem } = helpersWrapper(OrganizationsConfig.collectionName);

    return (
        <BaseManagementComponent
            fetchItems={fetchItems}
            addItem={addItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
            fieldConfig={OrganizationsConfig.fieldsConfig}
            entityName={OrganizationsConfig.entityName}
            basePath="/management/organizations"
        />
    );
};

// Users Page - /management/users
export const UsersPage = () => {
    const { fetchItems, addItem, updateItem, deleteItem } = helpersWrapper(UsersConfig.collectionName);

    return (
        <BaseManagementComponent
            fetchItems={fetchItems}
            addItem={addItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
            fieldConfig={UsersConfig.fieldsConfig}
            entityName={UsersConfig.entityName}
            basePath="/management/users"
        />
    );
};

// Authorizations Page - /management/users/authorizations
export const AuthorizationsPage = () => {
    const { fetchItems, addItem, updateItem, deleteItem } = helpersWrapper(AuthorizationsConfig.collectionName);

    return (
        <BaseManagementComponent
            fetchItems={fetchItems}
            addItem={addItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
            fieldConfig={AuthorizationsConfig.fieldsConfig}
            entityName={AuthorizationsConfig.entityName}
            basePath="/management/users/authorizations"
        />
    );
};

// Entity Rows Stack Page (optional - if needed)
export const EntityRowsStackPage = () => {
    const { fetchItems, addItem, updateItem, deleteItem } = helpersWrapper(EntityRowsStackConfig.collectionName);

    return (
        <BaseManagementComponent
            fetchItems={fetchItems}
            addItem={addItem}
            updateItem={updateItem}
            deleteItem={deleteItem}
            fieldConfig={EntityRowsStackConfig.fieldsConfig}
            entityName={EntityRowsStackConfig.entityName}
            basePath="/management/entity-rows-stack"
        />
    );
};
