function findWordsAfterFirstBracket(text) {
  const indexFirstBracketFound = text.indexOf("(");
  if (indexFirstBracketFound == -1) {
    return "";
  }
  const wordsFirstBracketFound = text.substr(indexFirstBracketFound);
  if (!wordsFirstBracketFound) {
    return "";
  }
  return wordsFirstBracketFound.substr(1);
}

function findWordsBeforeLastBracket(text) {
  const indexClosingBracketFound = text.indexOf(")");
  if (indexClosingBracketFound == -1) {
    return "";
  }
  return text.substr(0, indexClosingBracketFound);
}

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
