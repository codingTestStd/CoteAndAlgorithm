function solution(my_string) {
  let arr = my_string.split(" "); // 공백을 기준으로 배열 생성
  console.log(arr);
  let result = Number(arr[0]); // 0번 인덱스 숫자로 변환 = 첫번째 숫자 구하고
  for (let i = 1; i < arr.length; i += 2) {
    // 홀수 인덱스 접근 = 연산자에 접근
    let operator = arr[i]; // 현재 연산자
    let NextNum = Number(arr[i + 1]); // 연산자 오른쪽 숫자
    if (operator === "+") {
      // 연산자가 + 면 더하고
      result += NextNum;
    } else {
      result -= NextNum; // - 면 빼기
    }
  }
  return result; // 결과 반환
}
