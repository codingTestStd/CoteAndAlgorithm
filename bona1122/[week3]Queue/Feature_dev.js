// https://school.programmers.co.kr/learn/courses/30/lessons/42586

const solution = (progresses, speeds) => {
  let result = [];
  const expectedTerm = progresses.map((progress, i) => {
    return Math.ceil((100 - progress) / speeds[i]);
  });
  let ready = expectedTerm[0];
  let featCnt = 1;
  for (let i = 1; i < expectedTerm.length; i++) {
    if (ready >= expectedTerm[i]) {
      featCnt++;
    } else {
      result = [...result, featCnt];
      featCnt = 1;
      ready = expectedTerm[i];
    }
  }
  result = [...result, featCnt];
  return result;
};

// 큐를 활용한 버전
function solution(progresses, speeds) {
  const result = [];
  const queue = progresses.map((progress, i) => {
    return Math.ceil((100 - progress) / speeds[i]);
  });

  while (queue.length > 0) {
    const expectedTerm = queue[0];
    let featCnt = 0;

    while (queue.length > 0 && queue[0] <= expectedTerm) {
      queue.shift();
      featCnt++;
    }
    result.push(featCnt);
  }

  return result;
}
