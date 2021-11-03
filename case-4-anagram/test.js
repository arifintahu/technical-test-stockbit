const anagram = require("./index");

function test(input) {
  const output = anagram(input);
  console.log("input :", input);
  console.log("output :", output);
  console.log("\n");
}

test(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]);
test(["kamu", "ukam", "tika", "aku", "kia", "ikat", "kua"]);
