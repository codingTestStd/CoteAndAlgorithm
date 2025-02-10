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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function validate(node, lower, upper) {
    if (!node) return true;

    const val = node.val;
    if (val <= lower || val >= upper) return false;

    return validate(node.left, lower, val) && validate(node.right, val, upper);
  }

  return validate(root, -Infinity, Infinity);
};
