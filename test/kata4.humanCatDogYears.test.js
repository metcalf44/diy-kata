const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns the age of a human and equivalent years for a cat and dog ", () => {
        expect(humanCatDogYears(10, 56, 64)).toEqual([10, 56, 64])
        expect(humanCatDogYears(5, 36, 39)).toEqual([5, 36,39])
        expect(humanCatDogYears(7, 44, 49)).toEqual([7, 44, 49])
    })
})

// Look Ma, no handlebars!!!
