/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * @param Number n
 * @returns Number
 */
const execute = n => {
    var curr = n;

    while (true) {
        for (var i = n - 1; i > 0; i--) {
            if (curr % i !== 0) {
                break;
            } else if (i === 1) {
                return curr;
            }
        }

        curr = curr + n;
    }
};

test('test base case problem 5', () => {
    expect(execute(10)).toBe(2520);
});

test('test use case problem 5', () => {
    expect(execute(20)).toBe(232792560);
});
