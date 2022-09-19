const { Node, BinaryTree } = require("./binary_tree.js");

class BinarySearchTree extends BinaryTree {
  add(number) {
    if (!this.root) {
      this.root = new Node(number);
      return;
    }
    let currentNode = this.root;
    while (true) {
      //left
      if (number < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(number);
          break;
        }
      }
      //right
      if (number > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(number);
          break;
        }
      }
    }
  }
  contains(number) {
    return this.inOrder().includes(number);
  }

  //boring solution
  findMaximumValue() {
    const arr = this.inOrder();
    return arr[arr.length - 1];
  }
  //cool solution
  findMaximumValueCool() {
    let current = this.root;
    if (!current) {
      return undefined;
    }
    let maximumValue = current.value;
    while (true) {
      if (maximumValue < current.value) {
        maximumValue = current.value;
      }
      if (!current.left) {
        if (!current.right) {
          console.log("no left, no right, done");
          break;
        } else {
          current = current.right;
          console.log("no left, moving right to", current.value);
          continue;
        }
      }
      if (!current.right) {
        current = current.left;
        console.log("no right, moving left to", current.value);
        continue;
      }
      if (current.left.value > current.right.value) {
        current = current.left;
        console.log("left greater than right, moving left to", current.value);
      } else {
        current = current.right;
        console.log("right greater than left, moving right to", current.value);
      }
    }
    return maximumValue;
  }
}

module.exports = { BinarySearchTree };
