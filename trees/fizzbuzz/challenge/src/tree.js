class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [this.value, this.children.map((child) => child.preOrder())].flat();
  }
}

function fizzBuzz(tree) {
  let newVal = tree.value;
  let built = "";
  if (tree.value % 3 == 0) {
    built += "fizz";
  }
  if (tree.value % 5 == 0) {
    built += "buzz";
  }
  if (built) {
    newVal = built;
  }
  return new Tree(newVal, tree.children.map(fizzBuzz));
}

module.exports = {
  Tree,
  fizzBuzz,
};
