const findFirstStringInBracket = require("./index");

function Table(inputText, outputText) {
  this.inputText = inputText;
  this.outputText = outputText;
}

function test(inputText) {
  const outputText = findFirstStringInBracket(inputText);
  console.table(new Table(inputText, outputText));
}

test("Welcome (hello)");
test("Silakan (duduk) disini");
test("(Lewat) sini");
test("kosong ()");
test("Hello world");
test("");
