const STORAGE_PREFIX_KEY = 'sorakapp';

export class LocalStorage {
    static getItem(key) {
        const item = localStorage.getItem(`${STORAGE_PREFIX_KEY}.${key}`);

        return item && JSON.parse(item);
    }

    static setItem(key, data) {
        const item = data === typeof 'string' ? data : JSON.stringify(data);

        localStorage.setItem(`${STORAGE_PREFIX_KEY}.${key}`, item);
    }

    static removeItem(key) {
        localStorage.removeItem(`${STORAGE_PREFIX_KEY}.${key}`);
    }
}

export class SessionStorage {
    static getItem(key) {
        const item = sessionStorage.getItem(`${STORAGE_PREFIX_KEY}.${key}`);

        return item && JSON.parse(item);
    }

    static setItem(key, data) {
        const item = data === typeof 'string' ? data : JSON.stringify(data);

        sessionStorage.setItem(`${STORAGE_PREFIX_KEY}.${key}`, item);
    }

    static removeItem(key) {
        sessionStorage.removeItem(`${STORAGE_PREFIX_KEY}.${key}`);
    }
}
