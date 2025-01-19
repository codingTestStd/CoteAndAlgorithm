function solution(s) {
  const elements = s.split(" ");
  let total = 0;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === "Z") {
      total -= parseInt(elements[i - 1]);
    } else {
      total += parseInt(elements[i]);
    }
  }

  return total;
}
