const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual(`I should be there in 4.5 hours`)
    expect(reachDestination(60, 12)).toEqual(`I should be there in 5 hours`)
    expect(reachDestination(70, 6)).toEqual(`I should be there in 11.5 hours`)
  });

  it("returns string with estimated time of arrival is 1 hour", () => {
    expect(reachDestination(10, 9)).toEqual(`I should be there in an hour`)
    expect(reachDestination(8, 8)).toEqual(`I should be there in an hour`)
  });

  it("returns string with estimated time of arrival is half an hour", () => {
    expect(reachDestination(2, 4)).toEqual(`I should be there in half an hour`)
    expect(reachDestination(10, 25)).toEqual(`I should be there in half an hour`)
  });

  
});
