function solution(arr1, arr2) {
  const answer = [];
  
  for(let i = 0; i < arr1.length; i++) {
      const row = [];
      for(let j = 0; j < arr1[0].length; j++) {
          row.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(row);
  }
  
  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((row, i) => 
      row.map((element, j) => element + arr2[i][j])
  );
}