function breadthFirst(tree) {
  const root = tree.root;
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  while (queue.length) {
    const targetNode = queue.shift();
    result.push(targetNode.value);

    if (targetNode.left) {
      queue.push(targetNode.left);
    }
    if (targetNode.right) {
      queue.push(targetNode.right);
    }
  }
  return result;
}

function fileCount(tree1, tree2) {
  const howManyFiles = (root, count) => {
    let isFolder = false;
    //is a folder
    if (root.left) {
      isFolder = true;
      count += howManyFiles(root.left);
    }
    if (root.right) {
      isFolder = true;
      count += howManyFiles(root.right);
    }
    if (isFolder) {
      return count;
    }
    //is a file
    return 1;
  };
  const result1 = howManyFiles(tree1.root, 0);
  const result2 = howManyFiles(tree2.root, 0);
  return result1 === result2;
}

module.exports = { breadthFirst, fileCount };
