function solution(ingredient) {
  let stack = []; // 스택
  let count = 0; // 햄버거 포장 갯수
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]); // ingredient 인덱스 순서대로 스택에 추가
    if (stack.length >= 4) {
      // 스택에 재료가 4개 이상 쌓였을때
      const hamburger = stack.slice(-4).join(""); // 스택의 끝에서부터 4개의 요소 문자열로 추출

      if (hamburger === "1231") {
        // 추출한 문자열이 1231 순서와 일치하면
        count++; // 포장 갯수 1 증가
        stack.splice(-4); // 스택에서 포장된 햄버거 제거
      }
    }
  }
  return count; // 총 포장 갯수 반환
}
