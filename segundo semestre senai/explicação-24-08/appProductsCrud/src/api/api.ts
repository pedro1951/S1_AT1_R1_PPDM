import axios from 'axios';
import { Platform } from 'react-native';

export const API_BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';


const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export default api;