import { genericFetch } from '../services/genericFetch.services';
import { LocalStorage } from '../utils/storages.utils';

export const authenticate = async (data) => {
    const url = 'http://localhost:4000/api/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const response = await genericFetch(url, options);

    const token = response.result.result;

    if (token) {
        LocalStorage.setItem('auth_token', token);
    }
};
