function solution(numbers) {
  let numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]; // 0 ~ 9 배열 생성
  let strNum = ""; // 숫자를 문자열로 표현한 numbers를 인덱스 순서대로 담을 변수
  let result = ""; // 숫자 단어에 해당하는 숫자를 담을 변수
  for (let i = 0; i < numbers.length; i++) {
    strNum += numbers[i]; // 변수에 numbers 인덱스 순서대로 담기

    if (numArr.includes(strNum)) {
      // 차례대로 담다가 배열에 해당하는 숫자가 있으면
      result += numArr.indexOf(strNum); // 해당 숫자 인덱스를 변수에 추가
      strNum = ""; // numbers에 있는 다음 숫자 단어를 더해주기 위해 초기화
    }
  }
  return Number(result); // 문자열로 돼있는 숫자 변수를 number 타입으로 변환 후 결과 반환
}
