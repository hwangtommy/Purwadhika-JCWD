const anagram = require ("./exercise.js")

test("Testing Anagram Function", () => {
    expect(anagram("anagram", "nagaram")).toBeTruthy()
})