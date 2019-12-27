export class Errors {
    static fetchError(error) {
        const { message, statusCode, errno } = error;
        const newError = new Error(message);

        newError.errno = errno;
        newError.statusCode = statusCode;

        return newError;
    }

    static manageErrno(error) {
        switch (error.errno) {
            case '0001':
                return { error: 'Username/password are incorrect' };
            case '0002':
                return { error: 'Username already exists' };
            default:
                throw Errors.fetchError(error);
        }
    }
}
