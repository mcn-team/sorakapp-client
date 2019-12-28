import { simpleFetch, Authentication, Errors } from '../utils';

export const authenticate = async (data) => {
    const endpoint = '/login';
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        const response = await simpleFetch(endpoint, options);

        if (response && response.token) {
            Authentication.setAuthentication(response.token);
        }

        return response;
    } catch (err) {
        return Errors.manageErrno(err);
    }
};

export const register = async (data) => {
    const url = '/register';
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        const response = await simpleFetch(url, options);

        if (response && response.token) {
            Authentication.setAuthentication(response.token);
        }

        return response;
    } catch (err) {
        return Errors.manageErrno(err);
    }
};
