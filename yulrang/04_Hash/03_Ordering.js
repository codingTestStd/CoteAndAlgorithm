function solution(emergency) {
  var answer = [];
  let orderArr = [{
      emergency: 0,
      order: 0,
  }];
  
  emergency.forEach((el) => {
      orderArr.push({emergency : el})
  });
  orderArr.sort((a, b) => b.emergency - a.emergency);
  orderArr.forEach((el, idx) => {
      el.order = idx + 1;
  });
  
  answer = emergency.map((el) => 
      orderArr.find((orderElement) => orderElement.emergency === el).order
  )
  return answer;
}