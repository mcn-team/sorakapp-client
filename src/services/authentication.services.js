const HTTP_BAD_REQUEST = 400;

async function fetchAuthenticate(data) {
    return new Promise(async (resolve, reject) => {
        const url = 'http://localhost:4000/api/login';
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, init);

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
}

export async function authenticate(data) {
    const result = await fetchAuthenticate(data);

    console.log(result);
}
