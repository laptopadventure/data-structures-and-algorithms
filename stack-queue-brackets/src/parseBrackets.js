function parseBrackets(string) {
  const bracketStack = [];
  const characters = string.split("");
  const opening2Closing = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (const char of characters) {
    const isOpening = /[[{(]/gm.test(char);
    const isClosing = /[\]})]/gm.test(char);
    if (isOpening) {
      bracketStack.push(opening2Closing[char]);
      continue;
    }
    if (isClosing) {
      if (bracketStack[bracketStack.length - 1] !== char) {
        return false;
      }
      bracketStack.pop();
      continue;
    }
  }
  return !bracketStack.length;
}

module.exports = parseBrackets;
