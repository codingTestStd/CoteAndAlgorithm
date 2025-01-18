function solution(board, moves) {
  let answer = 0;
  const stack = [];
  const width = board.length;

  const pullCrane = (order) => {
    const w = order - 1;
    let h = 0;

    while (width > h) {
      const doll = board[h][w];
      if (doll !== 0) {
        if (stack[stack.length - 1] === doll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[h][w]);
        }

        board[h][w] = 0;
        break;
      }
      h++;
    }
  };

  moves.forEach((e) => pullCrane(e));

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
