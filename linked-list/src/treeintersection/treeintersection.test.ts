import { treeIntersection, BinaryTreeNode } from './treeintersection';

const tree1: BinaryTreeNode<number> = {
  value: 2,
  left: {
    value: 3,
    left: {
      value: 4,
      left: {
        value: 5 
      },
      right: {
        value: 5
      }
    },
    right: {
      value: 1
    }
  },
  right: {
    value: 9,
  }
};

const tree2: BinaryTreeNode<number> = {
  value: 2,
  left: {
    value: 3,
    right: {
      value: 5,
      left: {
        value: 7
      }
    }
  }
};

describe('parts', () => {
  it('treeIntersection', () => {
    expect(treeIntersection(tree1, tree2)).toEqual([5, 3, 2]);
  });
});
