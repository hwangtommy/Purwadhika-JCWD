const profit = require ("./exercise.js")

test("Testing Max Profit Function", () => {
    expect(profit([1,7,6,4,8,9])).toBe(8)
    expect(profit([10,9,5,1,8,10])).toBe(9)
})