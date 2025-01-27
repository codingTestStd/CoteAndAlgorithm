// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 1. 큐를 활용한 방법
const solution1 = (cards1, cards2, goal) => {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else return "No";
  }
  return "Yes";
};

// 2. 포인터를 활용한 방법
const solution2 = (cards1, cards2, goal) => {
  let p1 = 0,
    p2 = 0;

  for (const word of goal) {
    if (word === cards1[p1]) {
      p1++;
    } else if (word === cards2[p2]) {
      p2++;
    } else return "No";
  }
  return "Yes";
};
