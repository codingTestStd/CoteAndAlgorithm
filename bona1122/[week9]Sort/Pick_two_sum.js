// https://school.programmers.co.kr/learn/courses/30/lessons/68644

const solution = numbers => {
  const set = new Set();
  
  for(let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j <numbers.length; j++){
          const num = numbers[i] + numbers[j]
          set.add(num)
      }
  }
  
  return [...set].sort((a, b) => a - b)
}