function anagram(input) {
  let output = [];
  let setUnique = {};

  for (let word of input) {
    let wordTransformed = word.split("").sort().join("");
    if (setUnique[wordTransformed] == undefined) {
      let indexArray = output.length;
      setUnique[wordTransformed] = indexArray;
      output[indexArray] = [];
    }
    output[setUnique[wordTransformed]].push(word);
  }

  return output;
}

module.exports = anagram;
