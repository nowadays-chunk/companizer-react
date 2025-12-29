// src/utils/orgApiHelpers.js
import api from "./apiClient";

// GET /api/subcollections/:subcollectionName
export const fetchDocuments = async (subcollectionName) => {
  try {
    const { data } = await api.get(`/subcollections/${subcollectionName}`);
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
export const updateDocument = async (
  subcollectionName,
  documentId,
  documentData
) => {
  try {
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
export const deleteDocument = async (subcollectionName, documentId) => {
  try {
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
  const tableName = collectionName.replace("-", "_");

  const fetchItems = () => fetchDocuments(tableName);
  const addItem = (item) => createDocument(tableName, item);
  const updateItem = (id, item) => updateDocument(tableName, id, item);
  const deleteItem = (id) => deleteDocument(tableName, id);
  const fetchItemById = (id) => fetchDocumentById(tableName, id);

  return {
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
    fetchItemById,
  };
};
