import { fizzBuzz } from '../src/fb';

test('Accepts a number as input and returns FizzBuzz if is a multiple of 3 and 5, Fizz if only 3, Buzz if only 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});