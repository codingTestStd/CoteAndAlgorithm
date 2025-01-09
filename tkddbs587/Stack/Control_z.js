function solution(s) {
  let answer = 0;
  const arr = s.split(" "); // 공백을 기준으로 문자열을 배열로 변환
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "Z") {
      // 배열 요소가 'Z' 가 아니면
      answer += Number(arr[i]); // Number 타입으로 변환 후 변수에 더하기
    } else {
      answer -= Number(arr[i - 1]); // 'Z' 면 현재 인덱스 하나 전 인덱스의 숫자 빼기
    }
  }
  return answer; // 최종 숫자 반환
}
