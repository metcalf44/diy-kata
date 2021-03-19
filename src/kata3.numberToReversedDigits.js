const numberToReversedDigits = number => {

    
  const stringNum = (''+number).split('');
  newArray = Array.from(stringNum)
  newArray.reverse();
  return newArray


};





module.exports = numberToReversedDigits;
