/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 * @param Number input
 * @returns Number
 */
const execute = input => {
    var n = input;
    var maxPrime = -1;

    while(n % 2 == 0) {
        n = n / 2;
        maxPrime = 2;
    }

    while(n % 3 == 0) {
        n = n / 3;
        maxPrime = 3;
    }

    for (var i = 5; i <= Math.sqrt(n); i += 6) {
        while (n % i == 0) {
            maxPrime = i;
            n = n / i;
        }
        while (n % (i + 2) == 0) {
            maxPrime = i + 2;
            n = n / (i + 2);
        }
    }

    return n > 4 ? n : maxPrime;
};

test('test base case problem 3', () => {
    expect(execute(13195)).toBe(29);
});

test('test use case problem 2', () => {
    expect(execute(600851475143)).toBe(4613732);
});
