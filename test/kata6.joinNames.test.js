const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, separated by commas and an ampersand", () => {
  
      expects(joinNames([{
        name: 'Bart'
      },
      {
        name: 'Lisa'
      },
      {
        name: 'Maggie'
      }
    ])).toEqual(`Bart, Lisa & Maggie`);
    
    expects(joinNames([{
      name: 'Ernie'
    },
    {
      name: 'Ethan'
    }
  ])).toEqual(`Ernie & Ethan`);

    expects(joinNames([{
      name: 'Fernandes'
    },
    {
      name: 'Rashford'
    },
    {
      name: 'Henderson'
    },
    {
      name: `Greenwood`
    }.toEqual(`fernandes, Rashford, Henderson & Greenwood`)
  ]))
});
    
});

