function solution(s) {
  let stack = []; // 스택
  let arr = s.split(""); // 괄호 별로 잘라서 배열 생성
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      // 열린 괄호일때
      stack.push(arr[i]); // 스택에 열린 괄호 추가
    } else {
      // 닫힌 괄호일때
      stack.pop(); // 스택에 쌓아둔 열린 괄호 제거
    }
  }
  if (stack.length === 0) {
    // 스택이 비어있으면 짝이 맞다는 뜻이므로 length가 0
    return true; // 결과 반환
  } else {
    return false;
  }
}
