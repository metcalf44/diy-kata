const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
it("If a True boolean is passed it will return 'Yes'", () => {

  expect(booleanToWord(true)).toBe('Yes')
  expect(booleanToWord(3 + 3 === 6)).toBe('Yes')
});

it("If a false boolean is passed it will return 'No'", () => {

  expect(booleanToWord(false)).toBe('No')
  expect(booleanToWord(3 + 3 === 5)).toBe('No')
});

});
