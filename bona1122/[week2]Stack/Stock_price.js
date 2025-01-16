// 1. 연속성을 체크하는 문제이면 스택 의심하기.
// 가격이 떨어지지 않은 연속기간을 찾는 문제!, 연속된 값들의 관계를 추적할 때 스택이 용이하다.
// 2. 이전 상태를 기억해야하는지
// 현재 가격을 이전의 가격들과 계속 비교해야함.
// 3. 나중에 들어온 데이터가 이전 데이터에 영향을 주는지
// 현재 시점의 가격이 이전시점들의 '가격 유지 기간'에 영향을 준다 -> 스택으로 이전데이터 보관하기
// => 연속성, 이전상태 기억, 나중데이터가 이전데이터에 영향을 주는 것 => 3가지를 체크하자 => 스택/큐
function solution(prices) {
  const stack = []; // {price: 가격, time: 시점} 객체를 저장할 스택
  const totalSeconds = prices.length;
  const maintainedSeconds = Array(totalSeconds).fill(0); // 각 시점별 가격이 유지된 기간

  for (let currentTime = 0; currentTime < totalSeconds; currentTime++) {
    const currentPrice = prices[currentTime];

    while (stack.length && stack.at(-1).price > currentPrice) {
      const lastPrice = stack.pop();
      maintainedSeconds[lastPrice.time] = currentTime - lastPrice.time;
    }

    stack.push({ price: currentPrice, time: currentTime });
  }

  // 끝까지 가격이 떨어지지 않은 주식들 처리
  while (stack.length) {
    const remainingPrice = stack.pop();
    maintainedSeconds[remainingPrice.time] =
      totalSeconds - 1 - remainingPrice.time;
  }

  return maintainedSeconds;
}
