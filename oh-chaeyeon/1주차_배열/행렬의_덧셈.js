function solution(arr1, arr2) {
  var answer = arr1.map((row, i) => {
    return row.map((num, j) => {
      return num + arr2[i][j];
    });
  });
  return answer;
}
