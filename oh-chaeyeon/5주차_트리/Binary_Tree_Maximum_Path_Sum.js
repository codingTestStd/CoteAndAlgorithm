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
var maxPathSum = function (root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);

    const currentSum = node.val + left + right;

    maxSum = Math.max(maxSum, currentSum);

    return node.val + Math.max(left, right);
  }

  dfs(root);
  return maxSum;
};
