import { Errors } from '../utils';
import MOCK from './orders.mock.json';

const ENDPOINT = '/products';

const mockGetManyOrders = () => {
    const SECOND = 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK);
        }, SECOND);
    });
};

export class Products {
    static async getManyOrders() {
        try {
            return await mockGetManyOrders(ENDPOINT);
        } catch (err) {
            return Errors.manageErrno(err);
        }
    }
}
