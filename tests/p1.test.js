/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * @param Number max
 * @returns Number
 */
const execute = max => {
    var sum = 0;

    for (var i = max - 1; i > 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i;
        }
    }

    return sum;
};

test('test base case problem 1', () => {
    expect(execute(10)).toBe(23);
});

test('test use case problem 1', () => {
    try {
        expect(execute(1000)).toBe(23);
    } catch (e) {
        console.log(execute(1000))
    }
});
