const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's position in the company", () => {

    const manUtd= [{
      name: 'Henderson',
      position: 'Goalkeeper'
    }, {
      name: 'Shaw',
      position: 'Defender'
    }, {
      name: 'Fernandes',
      position: 'Midfield'
    }, {
      name: 'Rashford',
      position: 'Forward' 
    }
  ]
  
    expect(getEmployerRole('Henderson', manUtd)).toEqual('Goalkeeper');
    expect(getEmployerRole('Shaw', manUtd)).toEqual('Defender');
    expect(getEmployerRole('Fernandes', manUtd)).toEqual('Midfield');
    expect(getEmployerRole('Rashford', manUtd)).toEqual('Forward');
  });
});
