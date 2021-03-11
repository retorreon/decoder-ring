// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const polybiusModule = (function () {

  const square = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"]
  ];
  
  function encodeHelper(input) {
    let result = []
    //loop through input, make it lower case and check for special cases
    for (let k = 0; k < input.length; k++){
      let inputLetter = input[k].toLowerCase();
      if (inputLetter === "i" || inputLetter === "j") {
      result.push(42);
      };
      if (inputLetter === " ") {
      result.push(" ");
      };
    //loop through square, if it matches input letter push to result the square coordinates and add a plus 1 to count for the diff in indexing
    for (let i = 0; i < square.length; i++) {
      const row = square[i];
      for (let position in row) {
        const letter = row[position];
        if(letter === inputLetter) {
          result.push((parseInt(position) +1),i +1);
        };
      };
    };
    };
    return result.join("")
  }
  
  function sentenceToWord (input) {
    let finalResult = "";
    const words = input.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length;j++) {
      count += 1
      }
    };
    console.log(count, count/2)
    if (count % 2 !=0) return false;
    const result = words.map((word) => decodeHelper(word));
    return result.join(" ");
    };
  
    function decodeHelper(input) {
      let result = "";
      //loop through input every 2 places because it's a coordinate pair.
      for (let p = 0; p < input.length; p+=2) {
        //check if its an i/j
        if (input[p] === 4 && input[p+1] === 2) {
          result += "i/j";
        };
        //first is array within the square, second is the position of the letter in the array. 
        //minus 1 to offset the index of zero against the given number.
        let firstNumber = parseFloat(input[p])-1;
        let secondNumber = parseFloat(input[p+1])-1;
        let letter = square[secondNumber][firstNumber];
          result += letter;
        };
      return result;
    }
  
  function polybius(input, encode = true) {
    return (encode) ? encodeHelper(input) : sentenceToWord(input);
  }

  console.log(polybius("4432423352125413", false))

  return {
    polybius,
  };
})();



module.exports = polybiusModule.polybius;
