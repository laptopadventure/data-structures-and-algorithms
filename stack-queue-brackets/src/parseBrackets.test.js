const parseBrackets = require("./parseBrackets");

describe("parseBrackets", () => {
  it("opening2Closing", () => {
    const opening2Closing = {
      "[": "]",
      "{": "}",
      "(": ")",
    };
    expect(opening2Closing["["]).toBe("]");
  });
  it("passes on a valid parse", () => {
    const input = "[()]";

    const result = parseBrackets(input);

    expect(result).toBe(true);
  });
  it("fails on a bad parse", () => {
    const mismatchedInput = "[(])";
    const unclosedInput = "[()";

    const mismatchedResult = parseBrackets(mismatchedInput);
    const unclosedResult = parseBrackets(unclosedInput);

    expect(mismatchedResult).toBe(false);
    expect(unclosedResult).toBe(false);
  });
});
