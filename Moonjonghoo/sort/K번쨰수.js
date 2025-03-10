function solution(array, commands) {
    var answer = [];
  
    for (let i = 0; i < commands.length; i++) {
      let newarr;
      for (let j = 0; j < commands[i].length; j++) {
        newarr = array
          .slice(commands[i][0] - 1, commands[i][1])
          .sort((a, b) => a - b);
      }
      answer.push(newarr[commands[i][2] - 1]);
    }
    return answer;
  }