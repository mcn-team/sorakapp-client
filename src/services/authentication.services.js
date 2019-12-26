import { simpleFetch, LocalStorage, Errors } from '../utils';

export const authenticate = async (data) => {
    const endpoint = '/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await simpleFetch(endpoint, options);
        const token = response.result;

        if (token) {
            LocalStorage.setItem('auth_token', token);
        }
    } catch (err) {
        return Errors.manageErrno(err);
    }
};
