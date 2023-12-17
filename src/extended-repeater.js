const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let repeatTimes = 1;
  let separator = "+";
  let addition = "";
  let additionRepeatTimes = 1;
  let additionSeparator = "|";
  if(options.hasOwnProperty("repeatTimes")) {
    repeatTimes = options.repeatTimes;
  }
  if(options.hasOwnProperty("separator")) {
    separator = options.separator;
  }
  if(options.hasOwnProperty("addition")) {
    addition = options.addition;
  }
  if(options.hasOwnProperty("additionRepeatTimes")) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if(options.hasOwnProperty("additionSeparator")) {
    additionSeparator = options.additionSeparator;
  }
  for(let i = 0; i < repeatTimes; i++) {
    let additionarray = [];
    let additionresult = ""
    for(let k = 0; k < additionRepeatTimes; k++) {
      additionarray.push(`${addition}`)
    }
    additionresult = additionarray.join(`${additionSeparator}`);
    result.push(`${str}${additionresult}`);
  }
  result = result.join(`${separator}`);
  return result;
}


module.exports = {
  repeater
};
