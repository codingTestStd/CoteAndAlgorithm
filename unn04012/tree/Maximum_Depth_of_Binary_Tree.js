/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  let depth = 0;
  const queue = [root];

  if (!root) return 0;

  while (queue.length > 0) {
    let numNodes = queue.length;
    for (let i = 0; i < numNodes; i++) {
      let node = queue.shift();
      if (!node) continue;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth;
};

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = [3, 9, 20, null, null, 15, 7];
