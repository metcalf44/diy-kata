const fizzBuzz = number => {
    const ifDivisableBy3 = (number % 3 === 0)
    const ifDivisableBy5 = (number % 5 === 0)
5

    if (ifDivisableBy5 && ifDivisableBy3) {
        return 'FizzBuzz'
    }
    
    if (ifDivisableBy5) {
        return 'Buzz'
    }
    
    if (ifDivisableBy3) {
        return 'Fizz'
    }

    return number

};
module.exports = fizzBuzz;
