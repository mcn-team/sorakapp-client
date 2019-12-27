export class Validation {
    static isRequired(value) {
        return value ? undefined : 'Required.';
    }

    static isMinimumLength(min) {
        return (value) => {
            return value && value.length && value.length >= min ? undefined : `${min} characters minimum.`;
        };
    }
}
