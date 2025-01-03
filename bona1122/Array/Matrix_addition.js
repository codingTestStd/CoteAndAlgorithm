const solution = (arr1, arr2) => {
  const add = (a, b) => a + b;
  const addArrays = (a, b) => a.map((item, idx) => add(item, b[idx]));

  return arr1.map((row, i) => addArrays(row, arr2[i]));
};