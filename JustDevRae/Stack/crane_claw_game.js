function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        let doll = board[i][move - 1];
        board[i][move - 1] = 0;

        if (stack.length > 0 && stack[stack.length - 1] === doll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(doll);
        }
        break;
      }
    }
  }

  return answer;
}
