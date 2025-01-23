function solution(name, yearning, photo) {
  var answer = [];
  let map1 = new Map();
  
  for(let i=0; i<name.length; i++) {
      map1.set(name[i], yearning[i]);
  }
  
  photo.forEach((arr) => {
      let sum = 0;
      arr.forEach((el) => {
          if(map1.has(el))
              sum += map1.get(el);
          else
              sum += 0;
      })
      answer.push(sum);
  })
  
  return answer;
}