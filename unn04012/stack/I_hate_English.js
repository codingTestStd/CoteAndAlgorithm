function solution(numbers) {
  let answer = numbers;
  const englishObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const [key, value] of Object.entries(englishObj)) {
    if (numbers.includes(key)) {
      answer = answer.replaceAll(key, value);
    }
  }

  return Number(answer);
}

console.log(solution('onefourzerosixseven'));
