import { HTTP_BAD_REQUEST } from '../constants/http.constants';
import { CONFIG } from '../config';

const { API_PREFIX, API_PORT, API_BASE_URL } = CONFIG;

export const simpleFetch = (endpoint, options = {}) => {
    return new Promise(async (resolve, reject) => {
        const url = `${API_BASE_URL}:${API_PORT}${API_PREFIX}${endpoint}`;
        const response = await fetch(url, options);

        if (response.status >= HTTP_BAD_REQUEST) {
            const errorResponse = await response.json();

            return reject(errorResponse);
        }

        const contentTypeHeader = response.headers.get('Content-Type');

        switch (contentTypeHeader) {
            case 'text/plain':
                return resolve(await response.text());
            case 'application/json':
            default:
                return resolve(await response.json());
        }
    });
};
