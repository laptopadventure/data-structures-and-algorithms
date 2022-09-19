const { BinarySearchTree } = require("./binary_search_tree.js");

describe("Binary Search Tree", () => {
  const tree = new BinarySearchTree();
  for (const i of [2, 3, 11, 6, 9, 7, 5, 1]) {
    tree.add(i);
  }

  it("adds & maintains items in order", () => {
    expect(tree.inOrder()).toEqual([1, 2, 3, 5, 6, 7, 9, 11]);
  });

  it("looks up whether an item is in the tree", () => {
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(8)).toBe(false);
  });

  it("returns the maximum in a boring way", () => {
    expect(tree.findMaximumValue()).toBe(11);
  });

  it("returns the maximum value in a cool way", () => {
    expect(tree.findMaximumValueCool()).toBe(11);
  });
});
