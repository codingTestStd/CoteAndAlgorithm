function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    if (diffA === diffB) {
      return b - a; // 거리가 같으면 큰 숫자가 우선
    }
    return diffA - diffB; // 거리 기준으로 오름차순 정렬
  });
}
