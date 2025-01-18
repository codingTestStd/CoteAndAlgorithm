const solution = (boards, moves) => {
  let stack = [];
  let removedCnt = 0;
  for (let i = 0; i < moves.length; i++) {
    let pickedToy = -1;
    let col = moves[i] - 1; // 격자의 열 선택(크레인 위치)
    for (let row = 0; row < boards.length; row++) {
      // 아래로 크레인 내리기
      if (boards[row][col] !== 0) {
        pickedToy = boards[row][col];
        boards[row][col] = 0;
        break;
      }
    }
    if (pickedToy === -1) continue; // 인형이 집히지 않은 경우, 아래 스킵
    if (pickedToy === stack[stack.length - 1]) {
      stack.pop();
      removedCnt += 2;
    } else {
      stack.push(pickedToy);
    }
  }
  return removedCnt;
};
