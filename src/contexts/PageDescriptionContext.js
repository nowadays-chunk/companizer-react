
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { entityToDescription } from '../layout/entityToDescription';

const PageDescriptionContext = createContext();

export const usePageDescription = () => useContext(PageDescriptionContext);

export const PageDescriptionProvider = ({ children }) => {
    const location = useLocation();
    const [description, setDescription] = useState('');

    useEffect(() => {
        // Simple exact match first
        let desc = entityToDescription[location.pathname];

        // If no exact match, try to find a partial match (for /view/:id etc)
        if (!desc) {
            // Sort keys by length descending to match most specific path first
            const keys = Object.keys(entityToDescription).sort((a, b) => b.length - a.length);
            for (const key of keys) {
                if (location.pathname.startsWith(key) && key !== '/') { // Avoid matching root '/' for everything
                    desc = entityToDescription[key];
                    break;
                }
            }
        }

        // Default fallbacks
        if (!desc && location.pathname === '/') {
            desc = entityToDescription['/'];
        }

        setDescription(desc || "Manage your entity data and settings here. Use the controls to view, edit, or analyze specific records.");
    }, [location]);

    return (
        <PageDescriptionContext.Provider value={{ description }}>
            {children}
        </PageDescriptionContext.Provider>
    );
};
