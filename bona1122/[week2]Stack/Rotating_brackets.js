function solution(s) {
  let result = 0;
  const map = { ")": "(", "}": "{", "]": "[" };
  const arr = [...s];

  const isValid = (arr) => {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const mappingItem = map[item];
      if (mappingItem) {
        if (mappingItem === stack.at(-1)) stack.pop();
        else return false;
      } else {
        stack.push(item);
      }
    }
    return stack.length === 0;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.unshift(arr.pop());
  }

  return result;
}
