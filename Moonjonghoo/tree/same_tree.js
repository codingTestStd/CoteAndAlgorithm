var isSameTree = function (p, q) {
  // 두 노드가 모두 null인 경우
  if (p === null && q === null) {
    return true;
  }
  // 한 노드만 null인 경우
  if (p === null || q === null) {
    return false;
  }
  // 노드의 값이 다른 경우
  if (p.val !== q.val) {
    return false;
  }
  // 왼쪽 및 오른쪽 서브트리를 재귀적으로 비교
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
