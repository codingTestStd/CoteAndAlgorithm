function solution(arr, divisor) {
  let newArr = arr.filter((el) => el % divisor === 0); // 나누어 떨어지는 엘리먼트가 담긴 새 배열 반환

  // 나누어 떨어지는 엘리먼트 없으면 그냥 [-1] 반환
  if (newArr.length === 0) {
    return [-1];
  }

  return newArr.sort((a, b) => a - b); // 오름차순 정렬
}
