function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let minarr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      minarr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(minarr);
  }
  return answer;
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
