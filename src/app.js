export default class Validator {
    constructor(value) {
        this.value = value;
    };

    validateUsername() {
        if(/[A-Za-z0-9_-]/.test(this.value) && !/([0-9])\1{2,}/.test(this.value) && !/^[0-9_-]/.test(this.value) && !/[0-9_-]$/.test(this.value)) {
            return true;
        } else {
            return false;
        };
    };
};

