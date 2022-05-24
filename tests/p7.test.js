/**
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
 * @param Number n
 * @returns Number
 */
const execute = n => {
    var curr = 2;
    var primeCount = 0;
    var lastPrime = 0;

    while (primeCount < n) {
        if (isPrime(curr)) {
            primeCount++;
            lastPrime = curr;
        }

        curr++;
    }

    return lastPrime;
};

const isPrime = n => {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    }

    var limit = Math.ceil(Math.sqrt(n));

    for (var i = 2; i <= limit; i++) {
        if (n % i == 0) {
            return false
        }
    }

    return true;
}

test('test base case problem 7', () => {
    expect(execute(6)).toBe(13);
});

test('test use case problem 7', () => {
    expect(execute(10001)).toBe(104743);
});
