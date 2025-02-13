var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  // 왼쪽과 오른쪽 자식 노드를 교환
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 재귀적으로 자식 노드들을 반전
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
