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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const output = [];

  const inorder = (tree) => {
    if (!tree) return;

    inorder(tree.left);
    output.push(tree.val);
    inorder(tree.right);
  };

  inorder(tree);

  return output;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree = new TreeNode(1);
tree.right = new TreeNode(2, new TreeNode(3));
console.log(tree);
console.log(inorderTraversal(tree));
