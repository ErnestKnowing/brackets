module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let strArray = str.split("");
  let dictionary = {};
  for (const [open, close] of bracketsConfig) {
    dictionary[open] = close;
    dictionary[close] = null;
  }
  for (let i = 0; i < strArray.length; i++) {
    let char = strArray[i];
    if (dictionary[char] === null) {
      stack.pop() === char;
    } else {
      stack.push(dictionary[char]);
    }
  }
  return stack.length !== 0 ? false : true;
};

  
