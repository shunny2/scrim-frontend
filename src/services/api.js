import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000,
});

instance.interceptors.request.use(async (config) => {
    try {
        const oldToken = localStorage.getItem('authToken');
        if(oldToken) {
            config.headers.Authorization = `Bearer ${oldToken}`; 
        }
        return config;
    } catch (error) {
        console.log('Entrou error: ', error);
    }
});

export default instance;