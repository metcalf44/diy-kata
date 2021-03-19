const humanCatDogYears = number => {
    const cat = 4;
    const dog = 5;

    const yearArray = [];
    yearArray.push(number)

    if (number === 1) {
        yearArray.push(catYears = 15);
        yearArray.push(dogYears = 15);
    } else if (number === 2) {
        yearArray.push(catYears = 24);
        yearArray.push(dogYears = 24);
    } else {
        yearArray.push(catYears = 24 + (cat * (number - 2)));
        yearArray.push(dogYears = 24 + (dog * (number - 2)))
    };

    return yearArray;

};

module.exports = humanCatDogYears;
