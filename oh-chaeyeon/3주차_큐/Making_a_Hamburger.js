function solution(ingredient) {
  const q = [];
  let count = 0;

  for (const item of ingredient) {
    q.push(item);

    if (q.length >= 4 && q.slice(-4).join("") === "1231") {
      q.splice(-4);
      count++;
    }
  }

  return count;
}
