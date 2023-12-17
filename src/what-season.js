const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  
  try {
  const month = date.getMonth() + 1;
  switch(month) {
    case 1:
      return 'winter';
    case 2:
      return 'winter';
    case 3:
      return 'spring';
    case 4:
      return 'spring';
    case 5:
      return 'spring'; 
    case 6:
      return 'summer';
    case 7:
      return 'summer';
    case 8:
      return 'summer';
    case 9:
      return 'autumn';
    case 10:
      return 'autumn';
    case 11:
      return 'autumn';
    case 12:
      return 'winter';
    default:
      throw new Error('Invalid date!');
  }
  }
  catch(error){
    throw new Error('Invalid date!');
  } 
}

module.exports = {
  getSeason
};
