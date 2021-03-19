const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toBe([5,4,3,2,1])
    expect(numberToReversedDigits(101231)).toBe([1,3,2,1,0,1])
  });
});
