function solution(board, moves) {
  const basket = [];
  let count = 0;

  for (let move of moves) {
    const column = move - 1;

    for (let i = 0; i < board.length; i++) {
      if (board[i][column] !== 0) {
        const doll = board[i][column];
        board[i][column] = 0;

        if (basket[basket.length - 1] === doll) {
          basket.pop();
          count += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  }

  return count;
}
