function preOrder(root) {
  // Root, Left, Right
  // Return a single array
  let traversal = [];
  traversal.push(root.value); // Root

  if (root.left) {
    // Left
    let leftTraversal = preOrder(root.left);
    traversal = traversal.concat(leftTraversal);
  }

  // Right
  if (root.right) {
    let rightTraversal = preOrder(root.right);
    traversal = traversal.concat(rightTraversal);
  }

  return traversal;
}

const preOrderOneLine = (root) =>
  root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  preOrder() {
    // Root, Left, Right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    if (this.left) {
      // Left
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  inOrder() {
    ///Left, Root, Right
    if (!this.value) {
      return [];
    }
    return [
      ...(this.left?.inOrder() || []),
      this.value,
      ...(this.right?.inOrder() || []),
    ];
  }
  postOrder() {
    ///Left, Right, Root
    if (!this.value) {
      return [];
    }
    return [
      ...(this.left?.postOrder() || []),
      ...(this.right?.postOrder() || []),
      this.value,
    ];
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder();
  }
  inOrder() {
    return this.root.inOrder();
  }
  postOrder() {
    return this.root.postOrder();
  }
}

module.exports = { Node, BinaryTree };
