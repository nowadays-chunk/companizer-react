import React, { createContext, useContext, useState, useEffect } from 'react';
import { helpersWrapper } from '../utils/clientQueries';
import { login as apiLogin, registerOrganization as apiRegister } from '../utils/authHelpers';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userAuthorizations, setUserAuthorizations] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initial load from localStorage
    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const storedUser = localStorage.getItem('userData');
                let parsedUser = null;

                if (token && storedUser) {
                    try {
                        parsedUser = JSON.parse(storedUser);
                    } catch (e) {
                        console.error("Failed to parse stored user", e);
                    }
                }

                if (parsedUser) {
                    setCurrentUser(parsedUser);
                    await loadAuthorizations(parsedUser.id);
                }
            } catch (error) {
                console.error('Error loading user:', error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const loadAuthorizations = async (userId) => {
        if (!userId) return;
        try {
            const authHelper = helpersWrapper('authorizations');
            const auths = await authHelper.fetchItems();
            const userAuths = auths.filter(auth =>
                auth.authorized_user_id === userId &&
                auth.is_active &&
                (!auth.authorization_end_date || new Date(auth.authorization_end_date) > new Date())
            );
            setUserAuthorizations(userAuths);
        } catch (error) {
            console.error("Error loading authorizations:", error);
        }
    };

    const login = async (email, password) => {
        try {
            const success = await apiLogin(email, password);
            if (success) {
                const storedUser = localStorage.getItem('userData');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setCurrentUser(parsedUser);
                    await loadAuthorizations(parsedUser.id);
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error("Login context error:", error);
            throw error;
        }
    };

    const registerOrganization = async (data) => {
        try {
            // Register returns { token, user, organization }
            const response = await apiRegister(data);

            if (response && response.user) {
                setCurrentUser(response.user);
                await loadAuthorizations(response.user.id);
                return response;
            }
        } catch (error) {
            console.error("Registration context error:", error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('organizationData');
        setCurrentUser(null);
        setUserAuthorizations([]);
    };

    const value = {
        currentUser,
        userAuthorizations,
        loading,
        setCurrentUser,
        login,
        registerOrganization,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
