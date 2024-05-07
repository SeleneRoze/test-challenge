const calculator = {
    sum(a, b) {
        return a + b;
    },
    substr(a, b) {
        return a - b;
    },
    product(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    },
    power(a, b) {
        return a ** b;
    },
    factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }
};

module.exports = calculator;
