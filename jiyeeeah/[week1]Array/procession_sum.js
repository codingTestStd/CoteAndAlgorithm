function solution(arr1, arr2) {
  const Xn = arr1.length;
  const Yn = arr1[0].length;
  const answer = new Array(Xn).fill(0).map(() => new Array(Yn).fill(0));
  for (let i = 0; i < Xn; i++) {
    for (let j = 0; j < Yn; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}
