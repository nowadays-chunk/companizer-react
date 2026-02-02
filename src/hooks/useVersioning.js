import { useState, useCallback } from 'react';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';

const useVersioning = (entityType) => {
    const [versionHistory, setVersionHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const helper = helpersWrapper(entityType);

    // Fetch version history for a specific original_row_id
    const fetchVersionHistory = useCallback(async (originalRowId) => {
        setLoading(true);
        try {
            const allRows = await helper.fetchItems();

            // Get all versions of this row
            const versions = allRows
                .filter(row => row.original_row_id === originalRowId || row.id === originalRowId)
                .sort((a, b) => b.version_number - a.version_number); // Latest first

            setVersionHistory(versions);
            return versions;
        } catch (error) {
            console.error('Failed to fetch version history:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [entityType]);

    // Create a new version (called during update)
    const createNewVersion = useCallback(async (currentRow, updatedData, userId) => {
        try {
            // Determine the original_row_id
            const originalRowId = currentRow.original_row_id || currentRow.id;

            // Create new version
            const newVersion = {
                ...updatedData,
                version_number: currentRow.version_number + 1,
                version_date: new Date().toISOString(),
                version_author_id: userId,
                is_current_version: true,
                is_versioned: true,
                original_row_id: originalRowId,
                created_at: new Date().toISOString()
            };

            // Mark current version as not current
            if (currentRow.id) {
                await helper.updateItem(currentRow.id, {
                    is_current_version: false
                });
            }

            // Add new version
            const createdVersion = await helper.addItem(newVersion);

            return createdVersion;
        } catch (error) {
            console.error('Failed to create new version:', error);
            throw error;
        }
    }, [entityType]);

    // Restore a previous version (creates new version with old data)
    const restoreVersion = useCallback(async (versionToRestore, userId) => {
        try {
            // Get the current version
            const allRows = await helper.fetchItems();
            const currentVersion = allRows.find(
                row => row.is_current_version &&
                    (row.original_row_id === versionToRestore.original_row_id ||
                        row.id === versionToRestore.original_row_id)
            );

            if (!currentVersion) {
                throw new Error('Current version not found');
            }

            // Create a copy of the version to restore, but as a new version
            const { id, created_at, updated_at, version_number, version_date, version_author_id, is_current_version, ...dataToRestore } = versionToRestore;

            const restoredVersion = await createNewVersion(currentVersion, dataToRestore, userId);

            return restoredVersion;
        } catch (error) {
            console.error('Failed to restore version:', error);
            throw error;
        }
    }, [entityType, createNewVersion]);

    // Compare two versions
    const compareVersions = useCallback((version1, version2) => {
        const changes = [];
        const allKeys = new Set([...Object.keys(version1), ...Object.keys(version2)]);

        // Exclude version-related fields from comparison
        const excludeFields = [
            'id', 'version_number', 'version_date', 'version_author_id',
            'is_current_version', 'original_row_id', 'created_at', 'updated_at'
        ];

        allKeys.forEach(key => {
            if (excludeFields.includes(key)) return;

            const val1 = version1[key];
            const val2 = version2[key];

            if (JSON.stringify(val1) !== JSON.stringify(val2)) {
                changes.push({
                    field: key,
                    oldValue: val1,
                    newValue: val2
                });
            }
        });

        return changes;
    }, []);

    // Soft delete for versioned rows
    const softDelete = useCallback(async (rowId, userId) => {
        try {
            const row = await helper.fetchItem(rowId);

            if (!row.is_versioned) {
                // Not versioned, perform regular delete
                await helper.deleteItem(rowId);
                return;
            }

            // Mark as not current (soft delete)
            await helper.updateItem(rowId, {
                is_current_version: false,
                deleted_at: new Date().toISOString(),
                deleted_by: userId
            });
        } catch (error) {
            console.error('Failed to soft delete:', error);
            throw error;
        }
    }, [entityType]);

    return {
        versionHistory,
        loading,
        fetchVersionHistory,
        createNewVersion,
        restoreVersion,
        compareVersions,
        softDelete
    };
};

export default useVersioning;
