function solution(want, number, discount) {
  const required = {};
  want.forEach((item, index) => {
    required[item] = number[index];
  });

  let day = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const current = {};

    for (let j = i; j < i + 10; j++) {
      current[discount[j]] = (current[discount[j]] || 0) + 1;
    }

    const isValid = want.every(
      (item) => (current[item] || 0) >= required[item]
    );

    if (isValid) day++;
  }

  return day;
}
