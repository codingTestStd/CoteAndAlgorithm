var inorderTraversal = function (root) {
  const result = [];

  const traverse = (node) => {
    if (node === null) return;
    traverse(node.left); // 왼쪽 서브트리 방문
    result.push(node.val); // 현재 노드 방문
    traverse(node.right); // 오른쪽 서브트리 방문
  };

  traverse(root);
  return result;
};
