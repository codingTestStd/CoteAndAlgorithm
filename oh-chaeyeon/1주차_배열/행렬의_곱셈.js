function solution(arr1, arr2) {
  const rowsA = arr1.length;
  const colsA = arr1[0].length;
  const colsB = arr2[0].length;

  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  // 행렬 곱셈
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}
