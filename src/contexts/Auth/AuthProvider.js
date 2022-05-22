import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApiAuth';
import { AuthContext } from './AuthContext';

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');

            if (storageData) {
                const { user } = await api.validateToken(storageData);

                if (user)
                    setUser(user);
            }
        }
        validateToken();

    }, []);

    const signIn = async (email, password) => {
        const { user, authorisation: { token } } = await api.signIn(email, password);

        if (user && token) {
            setUser(user);
            setToken(token);
            return true;
        }

        return false;
    }

    const signOut = async () => {
        const storageData = localStorage.getItem('authToken');

        await api.logout(storageData);
        setUser(null);
        setToken('');
    }

    const setToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );
};