// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function decodeHelper(input, alphabet) {
    let decodedString = ""
    //loop through input 
      for (let i = 0; i < input.length; i++) {
        if (key.includes(input[i]) || alphabet.includes(input[i])) {
          for (let j = 0; j < alphabet.length; j++) {
            console.log(alphabet[16])
            if (input[i] === alphabet[j]) {
            decodedString += key[j]
            };
          };
        } else {
          decodedString += input[i];
        };
      };
    return decodedString
  }

  function encodeHelper (input, alphabet) {
    let encodedString = "";
    let lowerCaseInput = input.toLowerCase()
    //loop through input, check all input letters are in the key or the alphabet
    for (let i = 0; i < lowerCaseInput.length; i++) {
      if (key.includes(lowerCaseInput[i]) || alphabet.includes(lowerCaseInput[i])) {
        for (let j = 0; j < key.length; j++) {
          //loop through the key, once you find the the position of the input letter to key letter, add the given alphabet equivalent based on the index position
          if (lowerCaseInput[i] === key[j]) {
            encodedString += alphabet[j]
          };
        };
        //if the key or given alphabet doesn't have the character
      } else {
        encodedString += input[i];
        };
    };
  return encodedString;          
  }

  function substitution(input, alphabet, encode = true) {
    //check that alphabet is given and its 26 char long
    if (alphabet == undefined || alphabet.length != 26) {
      return false;
    };
    //check that the alphabet is unique
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) != alphabet.lastIndexOf(alphabet[i])) {
        console.log(alphabet.lastIndexOf(alphabet[i]), alphabet[i])
        return false;
      };
    };
    if (encode) {
      return encodeHelper(input, alphabet)
    } else {
      return decodeHelper(input, alphabet);
    };
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
