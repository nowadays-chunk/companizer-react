// src/utils/orgApiHelpers.js
import api from "./apiClient";

// GET /api/subcollections/:subcollectionName
// GET /api/subcollections/:subcollectionName
export const fetchDocuments = async (subcollectionName, params = {}) => {
  try {
    const { data } = await api.get(`/subcollections/${subcollectionName}`, { params });
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${subcollectionName}:`, error);
    return [];
  }
};

// ✅ CREATE — keep the name: createDocument
// POST /api/subcollections/:subcollectionName
export const createDocument = async (subcollectionName, documentData) => {
  try {
    const { data } = await api.post(
      `/subcollections/${subcollectionName}`,
      documentData
    );
    return data.id; // backend sends { id: ... }
  } catch (error) {
    console.error(`Error creating document in ${subcollectionName}:`, error);
    throw new Error(`Could not create document in ${subcollectionName}`);
  }
};

// PUT /api/subcollections/:subcollectionName/:documentId
// Supports versioning: if is_versioned = true, creates new version instead of updating
export const updateDocument = async (
  subcollectionName,
  documentId,
  documentData,
  options = {}
) => {
  try {
    // Check if versioning is enabled for this row
    if (options.isVersioned && options.userId) {
      // Fetch current row to get version info
      const { data: currentRow } = await api.get(
        `/subcollections/${subcollectionName}/${documentId}`
      );

      if (currentRow.is_versioned) {
        // Create new version instead of updating
        const originalRowId = currentRow.original_row_id || currentRow.id;
        const newVersion = {
          ...documentData,
          version_number: currentRow.version_number + 1,
          version_date: new Date().toISOString(),
          version_author_id: options.userId,
          is_current_version: true,
          is_versioned: true,
          original_row_id: originalRowId,
        };

        // Mark current version as not current
        await api.put(
          `/subcollections/${subcollectionName}/${documentId}`,
          { is_current_version: false }
        );

        // Create new version
        const { data } = await api.post(
          `/subcollections/${subcollectionName}`,
          newVersion
        );
        return data.id;
      }
    }

    // Regular update (non-versioned or versioning disabled)
    await api.put(
      `/subcollections/${subcollectionName}/${documentId}`,
      documentData
    );
  } catch (error) {
    console.error(`Error updating document in ${subcollectionName}:`, error);
    throw new Error(`Could not update document in ${subcollectionName}`);
  }
};

// DELETE /api/subcollections/:subcollectionName/:documentId
// Supports versioning: soft delete for versioned rows
export const deleteDocument = async (subcollectionName, documentId, options = {}) => {
  try {
    // Check if versioning is enabled
    if (options.isVersioned) {
      const { data: currentRow } = await api.get(
        `/subcollections/${subcollectionName}/${documentId}`
      );

      if (currentRow.is_versioned) {
        // Soft delete: mark as not current
        await api.put(
          `/subcollections/${subcollectionName}/${documentId}`,
          {
            is_current_version: false,
            deleted_at: new Date().toISOString(),
            deleted_by: options.userId
          }
        );
        return;
      }
    }

    // Regular delete (hard delete)
    await api.delete(`/subcollections/${subcollectionName}/${documentId}`);
  } catch (error) {
    console.error(`Error deleting document from ${subcollectionName}:`, error);
    throw new Error(`Could not delete document from ${subcollectionName}`);
  }
};

// GET /api/subcollections/:relativeCollection/search-array?field=...&value=...
export const fetchDocumentsBySelectValue = async (
  relativeCollection,
  foreignKey,
  foreignValue
) => {
  try {
    const { data } = await api.get(
      `/subcollections/${relativeCollection}/search-array`,
      {
        params: { field: foreignKey, value: foreignValue },
      }
    );
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${relativeCollection}:`, error);
    return [];
  }
};

// GET /api/subcollections/:relativeCollection/search?field=...&value=...
export const fetchDocumentsByFieldValue = async (
  relativeCollection,
  fieldName,
  fieldValue
) => {
  try {
    const { data } = await api.get(
      `/subcollections/${relativeCollection}/search`,
      {
        params: { field: fieldName, value: fieldValue },
      }
    );
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${relativeCollection}:`, error);
    return [];
  }
};

// GET /api/subcollections/:subcollectionName/:documentId
export const fetchDocumentById = async (subcollectionName, documentId) => {
  try {
    const { data } = await api.get(
      `/subcollections/${subcollectionName}/${documentId}`
    );
    return data;
  } catch (error) {
    console.error(
      `Error fetching document with ID ${documentId} from ${subcollectionName}:`,
      error
    );
    return null;
  }
};

// Convenience wrapper for tables
export const helpersWrapper = (collectionName) => {
  const tableName = collectionName.replaceAll("-", "_");

  const fetchItems = (params, includeAllVersions = false) => {
    return fetchDocuments(tableName, params).then(items => {
      // Filter to only current versions unless explicitly requested
      if (!includeAllVersions) {
        return items.filter(item => item.is_current_version !== false);
      }
      return items;
    });
  };

  const addItem = (item) => createDocument(tableName, item);
  const updateItem = (id, item, options = {}) => updateDocument(tableName, id, item, options);
  const deleteItem = (id, options = {}) => deleteDocument(tableName, id, options);
  const fetchItemById = (id) => fetchDocumentById(tableName, id);
  const fetchItemsByKeyByValue = (key, value) => fetchDocumentsByFieldValue(tableName, key, value);

  return {
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
    fetchItemById,
    fetchItemsByKeyByValue
  };
};
