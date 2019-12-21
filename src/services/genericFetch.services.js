import { HTTP_BAD_REQUEST } from '../constants/http.constants';

export const genericFetch = async (url, options) => {
    return new Promise(async (resolve, reject) => {

        const response = await fetch(url, options);

        if (response.status >= HTTP_BAD_REQUEST) {
            return reject({
                result: await response.json(),
                status: response.status
            });
        }

        return resolve({
            result: await response.json(),
            status: response.status
        });
    });
};
