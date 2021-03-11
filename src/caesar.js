// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function translateLetter(letterInput, shift) {
    //check index of given letter in the alphabet array
    let position = alphabet.indexOf(letterInput);
    // check if we have to shift left of first instance of the letter "a"
    if (position + shift > 0) {
      return alphabet[(alphabet.indexOf(letterInput) + shift)];
    };
    //if we do, find the second instance of "a" and then shift left
    if (position + shift <= 0) {
      return alphabet[(alphabet.indexOf(letterInput, 25) + shift)];
    };
  }

  function caesar(input, shift, encode = true) {
    let message = [];
    //It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
    if (shift == 0 || shift < -25 || shift > 25) {
      return false
    };

    for (let i = 0; i < input.length; i++) {
      let character = input[i].toLowerCase();
      //check if input is a non alpha numeric character, if so don't do anything to it and push it into the array
      if (alphabet.includes(character)) {
        // shift char right if encoding
        if ((encode)) {
          let outputLetter = translateLetter(character, shift);
          message.push(outputLetter);
        };
        //shift char left if decoding
        if ((!encode)) {
          let outputLetter = translateLetter(character, shift * -1);
          message.push(outputLetter);
        };  
      } else {
        message.push(character);
      }
    };
    return message.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
