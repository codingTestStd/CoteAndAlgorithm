function solution(my_string) {
  const splited = my_string.split(" ");

  let ans = Number(splited[0]);

  splited.forEach((item, index) => {
    if (item === "+") {
      ans += Number(splited[index + 1]);
    }

    if (item === "-") {
      ans -= Number(splited[index + 1]);
    }
  });

  return ans;
}
