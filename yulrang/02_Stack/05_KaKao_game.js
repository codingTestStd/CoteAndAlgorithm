function solution(board, moves) {
  let answer = 0;
  let basket = [];
  
  const runBasket = () => {
      for(let i=basket.length-1; i>0; i--) {
          if(basket[i] === basket[i-1]) {
              basket.splice(i-1, 2);
              answer += 2;
          }
      }
  }
  
  for(let i=0; i<moves.length; i++) {
      for(let j=0; j<board[0].length; j++) {
          if(board[j][moves[i]-1] !== 0){
              basket.push(board[j][moves[i]-1]);            
              board[j][moves[i]-1] = 0;
              runBasket();
              break;
          }
      }
  }
  
  return answer;
}