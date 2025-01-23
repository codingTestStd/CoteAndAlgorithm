function solution(park, routes) {
  let pathArr = [];
  const WIDTH = park[0].length;
  const HEIGHT = park.length;
  
  for(let rowIdx = 0; rowIdx < park.length; rowIdx++){
      const row = park[rowIdx].split("");
      if(row.includes("S")){
          const columnIdx = park[rowIdx].indexOf("S");
          pathArr.push([columnIdx, rowIdx]);
          break;
      }
  }
  
  
  for(let i = 0; i<routes.length; i++) {
      const DIRECTION = routes[i].split(' ')[0];
      const AMOUNT = Number(routes[i].split(' ')[1]);
      let blockPos = [-1, -1];
      let x = pathArr[pathArr.length-1][0];
      let y = pathArr[pathArr.length-1][1];
      
      if (DIRECTION === "E") {
          blockPos = [park[y].indexOf("X", x), y];
          x = pathArr[pathArr.length-1][0] + AMOUNT;
          y = pathArr[pathArr.length-1][1];
      } else if (DIRECTION === "W"){
          blockPos = [park[y].lastIndexOf("X", x), y];
          x = pathArr[pathArr.length-1][0] - AMOUNT;
          y = pathArr[pathArr.length-1][1];
      } else if (DIRECTION === "S"){
          blockPos = [x, park.findIndex((row, idx) => idx >= y && row[x] === "X")];
          x = pathArr[pathArr.length-1][0];
          y = pathArr[pathArr.length-1][1] + AMOUNT;
      } else if (DIRECTION === "N"){
          blockPos = [x, park.slice(0, y).reverse().findIndex((row, idx) => row[x] === "X")];
          if (blockPos[1] !== -1) blockPos[1] = y - blockPos[1] - 1;
          x = pathArr[pathArr.length-1][0];
          y = pathArr[pathArr.length-1][1] - AMOUNT;
      }
  
      if (x < 0 || x >= WIDTH || y < 0 || y >= HEIGHT){
          continue;
      }
      if(!blockPos.includes(-1)){
          if((y === blockPos[1] && x >= blockPos[0] && pathArr[pathArr.length > 1 ? pathArr.length-2 : 0][0] < blockPos[0]) || 
             (y === blockPos[1] && x <= blockPos[0] && pathArr[pathArr.length > 1 ? pathArr.length-2 : 0][0] > blockPos[0]) ||
             (x === blockPos[0] && y >= blockPos[1] && pathArr[pathArr.length > 1 ? pathArr.length-2 : 0][1] < blockPos[1]) ||
              (x === blockPos[0] && y <= blockPos[1] && pathArr[pathArr.length > 1 ? pathArr.length-2 : 0][1] > blockPos[1]) ) {
              continue;
          }
      }
      
      pathArr.push([x, y]);
  }
  
  return pathArr[pathArr.length-1].reverse();
}

