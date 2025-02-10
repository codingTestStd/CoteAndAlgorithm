function solution(s) {
  let count = 0;
  let removed = 0;

  while (s !== "1") {
    const originalLength = s.length;
    const newStr = s
      .split("")
      .filter((char) => char === "1")
      .join("");
    removed += originalLength - newStr.length;
    s = newStr.length.toString(2);
    count++;
  }

  return [count, removed];
}
