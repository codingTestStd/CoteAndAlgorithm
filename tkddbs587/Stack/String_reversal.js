function solution(str) {
  var answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // 문자열 변수 str의 마지막 인덱스부터 한글자씩 접근
    answer += str[i]; // 문자열 변수 answer에 추가
  }
  return answer; // 뒤집은 문자열 반환
}
