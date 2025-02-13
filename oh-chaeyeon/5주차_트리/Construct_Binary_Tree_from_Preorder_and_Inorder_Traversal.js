/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderMap = new Map();
  inorder.forEach((val, idx) => inorderMap.set(val, idx));

  function build(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    const inRootIndex = inorderMap.get(rootVal);
    const leftSize = inRootIndex - inStart;

    root.left = build(
      preStart + 1,
      preStart + leftSize,
      inStart,
      inRootIndex - 1
    );
    root.right = build(preStart + leftSize + 1, preEnd, inRootIndex + 1, inEnd);

    return root;
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
