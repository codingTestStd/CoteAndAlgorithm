function solution(order) {
  let answer = 0;
  const tempConv = [];
  let boxIndex = 1;
  for (let i = 0; i < order.length; i++) {
    while (boxIndex <= order[i]) {
      tempConv.push(boxIndex++);
    }
    const top = tempConv[tempConv.length - 1];
    if (top !== order[i]) break;
    tempConv.pop();
    answer++;
  }
  return answer;
}

// 틀린 답변입니다.
function solution(order) {
  const tempConv = [];
  const truck = [];
  for (let i = 0; i < order.length; i++) {
    const topTempConv = tempConv[tempConv.length - 1];
    if (tempConv.length > 0 && topTempConv === order[i]) {
      tempConv.pop();
      truck.push(order[i]);
    } else if (!tempConv.includes(order[i])) {
      const startNum = i - 1 >= 0 ? order[i - 1] + 1 : 1;
      for (let j = startNum; j < order[i]; j++) {
        tempConv.push(j);
      }
      truck.push(order[i]);
    } else if (tempConv.length === 0 && i + 1 === order[i]) {
      truck.push(order[i]);
    } else {
      return truck.length;
    }
  }
  return truck.length;
}
