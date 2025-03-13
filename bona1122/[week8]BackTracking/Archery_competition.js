// https://school.programmers.co.kr/learn/courses/30/lessons/92342
// 핵심은 1. 각 점수에 대해 이길지 말지를 결정하는 것
// 2. 이길 때, 최소한의 화살 사용하기 - 어피치보다 1개만 더 쏘면됨. => 최고점수 만들기 위해 화살 효율적 사용, 그리고 낮은점수를 많이 맞추는게 우선되므로

function solution(n, info) {
  let maxDiff = 0
  let answer = [-1]
  let lion = Array(11).fill(0)

  // level은 현재 검사 중인 점수(0부터 시작), count는 남은 화살 수
  function dfs(level, count) {
    if (level == 10) {
      lion[level] = count // 남은 화살은 모두 0점에 사용

      let sum = 0
      for (let i = 0; i < 10; i++) {
        if (lion[i] > info[i]) {
          // 라이언이 점수 획득
          sum = sum + (10 - i)
        } else if (lion[i] === info[i] && lion[i] === 0) {
          // 둘다 점수획득 못함
          continue
        } else if (lion[i] === info[i] || lion[i] < info[i]) {
          // 어피치가 점수 획득
          if (info[i] > 0) sum = sum - (10 - i)
        }
      }

      if (sum > maxDiff) {
        maxDiff = sum
        answer = [...lion]
      } else if (sum == maxDiff && sum > 0) {
        // 점수차가 같으면 낮은 점수를 더 많이 맞힌 경우를 선택
        // 낮은 점수부터 비교
        for (let j = 10; j >= 0; j--) {
          if (answer[j] == lion[j]) {
            continue
          } else if (lion[j] > answer[j]) {
            answer = [...lion]
            break
          } else {
            break
          }
        }
      }
      return
    }

    // 1. 현재 점수는 포기하는 경우 (화살 0개 사용)
    dfs(level + 1, count)

    // 2. 현재 점수에서 이기는 경우 (남은화살 있고, 어피치보다 1개 더 사용)
    const neededArrows = info[level] + 1
    if (count >= neededArrows) {
      lion[level] = neededArrows
      dfs(level + 1, count - neededArrows)
      lion[level] = 0 // 백트래킹 초기화
    }
  }

  dfs(0, n)

  return maxDiff <= 0 ? [-1] : answer
}
