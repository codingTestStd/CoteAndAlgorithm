# 백트래킹 (Backtracking)

## 1. 백트래킹
- 백트래킹은 모든 가능한 경우의 수를 탐색하는 알고리즘 기법
- 문제 해결을 위해 모든 가능한 경우를 시도 후, 유망하지 않은 경우는 즉시 포기하는 방식
- 깊이 우선 탐색(DFS)의 일종으로 볼 수 있음

## 2. 백트래킹의 핵심 특징
1. 완전 탐색: 모든 가능한 경우의 수를 탐색
2. 가지치기(Pruning)**: 불필요한 경로를 빠르게 제거
3. 재귀적 접근: 문제를 작은 하위 문제로 분해
4. 상태 되돌리기: 탐색 후 이전 상태로 복귀

## 3. 백트래킹 알고리즘의 일반적인 구조
```javascript
function backtrack(현재상태, 다른매개변수) {
    // 기저 조건: 문제의 해결책을 찾았을 때
    if (문제해결조건) {
        결과에 추가
        return
    }
    
    // 현재 상태에서 가능한 모든 선택지 탐색
    for (각 선택지) {
        // 선택지 추가
        현재상태에 선택지 추가
        
        // 재귀적 탐색
        backtrack(변경된상태)
        
        // 백트래킹: 상태 되돌리기
        현재상태에서 선택지 제거
    }
}
```

## 4. 백트래킹의 대표적인 문제 유형
1. **순열 생성**
   - 모든 가능한 순서 조합 찾기
   - 예: 숫자 배열의 모든 순열

2. **조합 생성**
   - 특정 길이의 조합 찾기
   - 예: n개 중 k개 선택
3. **부분집합 생성**
   - 주어진 집합의 모든 부분집합 생성

4. **제약 조건 문제**
   - N-Queen 문제
   - 스도쿠 풀이
   - 괄호 생성

## 5. 백트래킹 vs 완전 탐색
- **완전 탐색**: 모든 경우의 수를 무조건 탐색
- **백트래킹**: 불필요한 경로를 효율적으로 제거

## 6. 시간 복잡도
- 최악의 경우: O(2^n) 또는 O(n!)
- 가지치기를 통해 실제 시간 복잡도는 줄어 들 수 있음

## 7. 주의사항
- 재귀 깊이에 주의 (스택 오버플로우 위험)
- 상태 되돌리기(백트래킹) 로직 명확히 구현
- 문제의 특성에 맞는 가지치기 전략 필요
- 메모리 사용에 유의
- 기저 조건 정확히 설정

## 8. JavaScript 백트래킹 예제
```javascript
function solution(n, m) {
  // 순열을 계산하고자 하는 원소가 담긴 배열 [1, 2, 3, 4]
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  // 각 원소의 인덱스 별 방문 여부
  let visited = new Array(n).fill(false);
  // 현재 순열에 포함된 원소
  let selected = [];

  let answer = "";
  function dfs(arr, depth) {
    // 모든 순열을 확인하는 부분
    if (depth === m) {
      let result = []; // 순열 결과 저장
      for (let i of selected) result.push(arr[i]);
      for (let x of result) answer += x + " ";
      answer += "\n"; // 줄바꿈 처리
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue; // 이미 처리된 원소라면 무시하고 넘어감
      selected.push(i); // 현재 원소 선택
      visited[i] = true; // 방문처리
      dfs(arr, depth + 1); // 재귀함수 호출
      selected.pop(); // 현재 원소 선택 취소
      visited[i] = false; // 원소 방문 처리 취소
    }
  }
  dfs(arr, 0);
  return answer;
}

console.log(solution(4, 2));
```
