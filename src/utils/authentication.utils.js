import { LocalStorage, SessionStorage } from './storages.utils';

const TOKEN_KEY = 'auth_token';
const KEEP_LOGIN_KEY = 'keep-login';

export class Authentication {
    static isAuthenticated() {
        return Boolean(LocalStorage.getItem(TOKEN_KEY)) || Boolean(SessionStorage.getItem(TOKEN_KEY));
    }

    static setAuthentication(token, keepLoggedIn) {
        if (keepLoggedIn) {
            LocalStorage.setItem(TOKEN_KEY, token);
            LocalStorage.setItem(KEEP_LOGIN_KEY, true);
        } else {
            SessionStorage.setItem(TOKEN_KEY, token);
        }
    }

    static removeAuthentication() {
        LocalStorage.removeItem(TOKEN_KEY);
        SessionStorage.removeItem(TOKEN_KEY);
    }

    static getToken() {
        return LocalStorage.getItem(TOKEN_KEY) || SessionStorage.getItem(TOKEN_KEY);
    }
}
