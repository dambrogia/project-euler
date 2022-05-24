/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 * @param Number digits
 * @returns Number
 */
const execute = digits => {
    const max = Math.pow(10, digits) - 1;
    const min = Math.pow(10, digits - 1);
    var maxPalindrome = 0;

    for (var i = max; i >= min; i--) {
        if (i % 10 === 0) {
            continue;
        }

        for (var j = i; j >= min; j--) {
            if (j % 10 === 0) {
                continue;
            }

            var product = i * j;

            if (isP(product) && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }

    return maxPalindrome;
};

/**
 * Check if a number is a palindrome.
 * Take first half, second half reversed, compare equality.
 *
 * @param {Number} num
 */
const isP = num => {
    var str = num.toString();
    var start = str.substring(0, Math.ceil(str.length / 2));
    var end = str.substring(str.length - Math.ceil(str.length / 2));
    var rev = end.split('').reverse().join('');
    return start === rev;
};

test('is palindrome', () => {
    expect(isP(9009)).toBe(true);
    expect(isP(90909)).toBe(true);
    expect(isP(9010)).toBe(false);
});

test('test base case problem 4', () => {
    expect(execute(2)).toBe(9009);
});

test('test use case problem 4', () => {
    expect(execute(3)).toBe(906609);
});
