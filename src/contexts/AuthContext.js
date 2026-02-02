import React, { createContext, useContext, useState, useEffect } from 'react';
import { helpersWrapper } from '../utils/firebaseCrudHelpers';

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

    // Mock user for development - replace with actual auth
    useEffect(() => {
        const loadUser = async () => {
            try {
                // Attempt to load from localStorage first
                const storedUser = localStorage.getItem('user');
                let mockUser;

                if (storedUser) {
                    try {
                        mockUser = JSON.parse(storedUser);
                    } catch (e) {
                        console.error("Failed to parse stored user", e);
                    }
                }

                // Fallback if no stored user
                if (!mockUser) {
                    mockUser = {
                        id: 1,
                        uuid: 'test-user-uuid',
                        first_name: 'Test',
                        last_name: 'User',
                        email: 'test@example.com',
                        role: 'admin', // super_admin, admin, manager, accountant, hr_manager, sales_manager, auditor, user, viewer
                        organization_id: 1,
                        is_active: true
                    };
                }

                setCurrentUser(mockUser);

                // Load user's authorizations
                if (mockUser?.id) {
                    const authHelper = helpersWrapper('authorizations');
                    const auths = await authHelper.fetchItems();
                    const userAuths = auths.filter(auth =>
                        auth.authorized_user_id === mockUser.id &&
                        auth.is_active &&
                        (!auth.authorization_end_date || new Date(auth.authorization_end_date) > new Date())
                    );
                    setUserAuthorizations(userAuths);
                }
            } catch (error) {
                console.error('Error loading user:', error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const value = {
        currentUser,
        userAuthorizations,
        loading,
        setCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
