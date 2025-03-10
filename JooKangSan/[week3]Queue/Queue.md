# JavaScript Queue Algorithm

## 1. 큐(Queue)란?

선입선출 원칙을 따르는 선형 자료구조 => 먼저 들어온 데이터가 먼저 나감

### 기본 특성

- 데이터는 한쪽 끝(rear)에서만 삽입되고, 다른 한쪽 끝(front)에서만 삭제됨
- 주로 대기열 관리, 작업 스케줄링 등에 사용

## 2. 자바스크립트에서 큐 구현 방법

### 배열을 사용한 기본 구현

```javascript
// 1. 기본적인 배열 메서드 사용
let queue = [];

// 삽입 (enqueue)
queue.push(element);

// 삭제 (dequeue)
queue.shift();

// 맨 앞 요소 확인 (peek)
queue[0];

// 큐가 비었는지 확인
queue.length === 0;
```

## 3. 큐의 주요 활용 사례

### 3.1 너비 우선 탐색(BFS)

```javascript
function bfs(graph, start) {
  // 방문한 노드 저장
  const visited = new Set();

  // 시작 노드를 큐에 추가
  const queue = [start];

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    // 현재 노드 추출
    const vertex = queue.shift();
    // 방문하지 않은 노드라면
    if (!visited.has(vertex)) {
      // 방문 처리
      visited.add(vertex);
      // 인접 노드들을 큐에 추가
      queue.push(...graph[vertex]);
    }
  }

  return visited;
}
```

### 3.2 작업 처리 대기열

```javascript
function processTaskQueue(tasks) {
  // 작업 목록을 큐로 변환
  const queue = [...tasks];
  // 결과 저장 배열
  const results = [];

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    // 작업 추출
    const task = queue.shift();
    // 작업 처리
    const result = processTask(task);
    // 결과 저장
    results.push(result);
  }

  return results;
}
```

### 3.3 이벤트 처리

```javascript
const eventQueue = {
  // 이벤트 큐 초기화
  queue: [],

  // 새 이벤트 추가
  addEvent: function (event) {
    this.queue.push(event);
  },

  processEvents: function () {
    // 큐가 빌 때까지 반복
    while (this.queue.length > 0) {
      // 이벤트 추출
      const event = this.queue.shift();
      // 이벤트 처리
      handleEvent(event);
    }
  },
};

eventQueue.addEvent("event1");
eventQueue.processEvents();
```

## 4. 성능 고려사항

### 4.1 시간 복잡도

- Enqueue (삽입): O(1)
- Dequeue (삭제): O(n) - shift() 사용 시
- Peek (조회): O(1)

### 4.2 주의사항

1. 배열의 shift() 연산은 O(n)의 시간 복잡도를 가짐
2. 대량의 데이터를 처리할 때는 최적화된 구현 방식 고려
3. 메모리 관리에 주의 (불필요한 참조 제거)
4. 동시성 처리 시 적절한 동기화 메커니즘 사용
