import api from '../services/api';

export const useApi = () => ({
    validateToken: async (token) => {
        const response = await api.get('me', {
            headers: { 
                'Authorization': `Bearer ${token}` 
            }
        });
        return response.data;
    },
    signIn: async (email, password) => {
        const response = await api.post('login', { email, password });
        return response.data;
    },
    logout: async (token) => {
        const response = await api.post('logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return response.data;
    },
});