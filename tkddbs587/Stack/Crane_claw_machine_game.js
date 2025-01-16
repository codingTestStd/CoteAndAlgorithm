function solution(board, moves) {
  // 2차원 배열 board를 각 열마다 스택 생성 5x5일 경우 총 5개의 스택 생성
  let stack = [...Array(board[0].length)].map(() => []);

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 0) {
        // 0이 아닐때만 각 스택에 추가
        stack[j].push(board[i][j]); // 스택의 각 열에 맞춰 board의 요소들 추가
      }
    }
  }

  let removeCount = 0;
  let bucket = [];

  for (let m of moves) {
    if (stack[m - 1].length > 0) {
      // 스택의 열에 인형이 존재하면
      const doll = stack[m - 1].pop(); // 맨 위의 인형 집어서
      // 바구니에 인형이 있고 맨 위의 인형이 지금 넣으려는 인형과 같으면
      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop(); // 바구니 맨 위의 인형 제거
        removeCount += 2; // 제거한 갯수 2개 추가
      } else {
        bucket.push(doll); // 바구니에 인형이 없거나 맨 위 인형과 같지 않은 인형이면 추가
      }
    }
  }

  return removeCount;
}
