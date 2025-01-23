function solution(park, routes) {
  let queue = [...routes];

  let [x, y] = park.map((s, i) => [s.indexOf('S'), i]).find(v => v[0] > -1);
  
  let [h, w] = [park.length, park[0].length];
  
  while(queue.length) {
      let [d, n] = queue.shift().split(' ');
      let [nx, ny] = [x, y];
      let go = true;
      
      for(let i = 0; i < n; i++) {
          if(d === 'N') ny--;
          if(d === 'S') ny++;
          if(d === 'W') nx--;
          if(d === 'E') nx++;
          
          if(ny < 0 || ny >= h || nx < 0 || nx >= w || park[ny][nx] === 'X') {
              go = false;
              break;
          }
      }
      
      if(go) [x, y] = [nx, ny];
  }
  
  return [y, x];
}