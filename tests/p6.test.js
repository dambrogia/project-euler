/**
The sum of the squares of the first ten natural numbers is,

The square of the sum of the first ten natural numbers is,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 * @param Number n
 * @returns Number
 */
const execute = n => {
    var sumOfSquares = 0;
    var squareOfSums = 0;

    for (var i = 1; i <= n; i++) {
        sumOfSquares = Math.pow(i, 2) + sumOfSquares;
        squareOfSums = squareOfSums + i;
    }

    return Math.pow(squareOfSums, 2) - sumOfSquares;
};

test('test base case problem 6', () => {
    expect(execute(10)).toBe(2640);
});

test('test use case problem 6', () => {
    expect(execute(100)).toBe(25164150);
});
