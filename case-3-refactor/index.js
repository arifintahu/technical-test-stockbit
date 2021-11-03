function findWordsAfterFirstBracket(text) {
  const indexFirstBracketFound = text.indexOf("(");
  if (indexFirstBracketFound == -1) {
    return "";
  }
  return text.substr(indexFirstBracketFound + 1);
}

function findWordsBeforeLastBracket(text) {
  const indexClosingBracketFound = text.indexOf(")");
  if (indexClosingBracketFound == -1) {
    return "";
  }
  return text.substr(0, indexClosingBracketFound);
}

// main function
function findFirstStringInBracket(str) {
  if (!str.length) {
    return "";
  }
  const wordsAfterFirstBracket = findWordsAfterFirstBracket(str);
  if (!wordsAfterFirstBracket) {
    return "";
  }
  return findWordsBeforeLastBracket(wordsAfterFirstBracket);
}

module.exports = findFirstStringInBracket;
