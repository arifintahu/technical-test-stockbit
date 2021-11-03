let input = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

let output = [];
let setUnique = {};

for (let word of input) {
  const arrayChar = [];
  for (let char of word) {
    arrayChar.push(char);
  }
  let wordTransformed = arrayChar.sort().join("");
  if (setUnique[wordTransformed] == undefined) {
    let indexArray = output.length;
    setUnique[wordTransformed] = indexArray;
    output[indexArray] = [];
  }
  output[setUnique[wordTransformed]].push(word);
}

console.log(output);
