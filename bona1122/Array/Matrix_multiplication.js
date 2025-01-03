const solution = (arr1, arr2) => {
  // 결과 행렬 크기 생성
  const result = Array.from({ length: arr1.length }, () =>
    Array(arr2[0].length).fill(0)
  );

  // 행렬 요소 하나씩 값 만들기
  return result.map((row, i) =>
    r.map((item, j) => {
      return arr1[i].reduce((acc, cur, k) => acc + cur * arr2[k][j], 0);
    })
  );
};