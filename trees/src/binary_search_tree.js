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
}

module.exports = { BinarySearchTree };
