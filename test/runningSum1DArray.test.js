const runningSum1DArrayTest = require('../runningSum1DArray')

test('Returns an array of numbers when given an array of numbers', () => {
    expect(runningSum1DArrayTest([1,2,3,4])).toEqual([1,3,6,10]);
});

test('Returns false when given an array of strings', () => {
    expect(runningSum1DArrayTest(['test', 'values'])).toBe(false)
})

test('Returns the correct sum when given negative values', () => {
    expect(runningSum1DArrayTest([7, -4, 10])).toEqual([7, 3, 13])
})

test('Returns false when given strings of numbers', () => {
    expect(runningSum1DArrayTest(['1', '2', '3', '4'])).toBeFalsy()
})