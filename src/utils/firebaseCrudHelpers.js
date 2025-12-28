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

// POST /api/subcollections/:subcollectionName
export const addDocument = async (subcollectionName, documentData) => {
  try {
    const { data } = await api.post(
      `/subcollections/${subcollectionName}`,
      documentData
    );
    return data.id;
  } catch (error) {
    console.error(`Error adding document to ${subcollectionName}:`, error);
    throw new Error(`Could not add document to ${subcollectionName}`);
  }
};

// PUT /api/subcollections/:subcollectionName/:documentId
export const updateDocument = async (subcollectionName, documentId, documentData) => {
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

export const helpersWrapper = (collectionName) => {
  const fetchItems = () => fetchDocuments(collectionName);
  const addItem = (item) => addDocument(collectionName, item);
  const updateItem = (id, item) => updateDocument(collectionName, id, item);
  const deleteItem = (id) => deleteDocument(collectionName, id);
  const fetchItemById = (id) => fetchDocumentById(collectionName, id);

  return {
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
    fetchItemById,
  };
};
