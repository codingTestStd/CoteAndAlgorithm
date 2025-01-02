function solution(arr1, arr2) {
  var answer = new Array(arr1.length);
  
  for(let i=0; i<arr1.length; i++) {
      answer[i] = new Array(arr1[i].length);
      for(let j=0; j<arr1[i].length; j++) {
          answer[i][j] = arr1[i][j] + arr2[i][j];
      }
  }
  
  return answer;
}