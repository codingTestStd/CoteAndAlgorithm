function solution(board, moves) {
  let N = board.length;
  let stack = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < N; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        stack.push(board[j][moves[i] - 1]);
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
          count++;
          count++;
          stack.pop();
          stack.pop();
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return count;
}
