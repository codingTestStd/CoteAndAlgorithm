## 목차
1. [정렬 알고리즘 개요](#1-정렬-알고리즘-개요)
2. [정렬 알고리즘](#2-기초-정렬-알고리즘)
3. [정렬 알고리즘 비교](#3-정렬-알고리즘-비교)


## 1. 정렬 알고리즘 개요
가장 기본적이고 중요한 알고리즘 중 하나.
배열이나 리스트의 요소들을 특정 순서(오름차순, 내림차순 등)에 따라 재배열하는 과정

### 정렬 알고리즘의 특성
- **안정성(Stability)**: 동일한 값에 대해 원래 순서를 유지하는가?
- **제자리 정렬(In-place)**: 추가 메모리를 거의 사용하지 않는가?
- **적응성(Adaptive)**: 이미 정렬된 데이터에 대해 성능이 향상되는가?

## 2. 정렬 알고리즘

### 1. 삽입 정렬 (Insertion Sort)

#### 개념
배열의 요소를 하나씩 꺼내 정렬된 배열 부분의 적절한 위치에 삽입하여 정렬하는 알고리즘.

#### 구현
```javascript
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        
        // key보다 큰 요소들을 오른쪽으로 이동
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // 적절한 위치에 key 삽입
    }
    return arr;
}
```

### 시간 복잡도
- 최선: O(n) - 이미 정렬된 배열
- 평균: O(n²)
- 최악: O(n²) - 역순으로 정렬된 배열

### 공간 복잡도
- O(1) - 제자리 정렬

### 특징
- 안정적인 정렬 알고리즘
- 적은 수의 요소에 대해 효율적
- 부분적으로 정렬된 배열에서 효율적
- 간단한 구현

## 2. 병합 정렬 (Merge Sort)

### 개념
분할 정복(Divide and Conquer) 방식을 사용하는 알고리즘.
배열을 절반으로 나눈 후 각각을 정렬한 다음 병합하는 과정을 반복

### 구현
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    // 분할
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // 병합
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
```

### 시간 복잡도
- 최선: O(n log n)
- 평균: O(n log n)
- 최악: O(n log n)

### 공간 복잡도
- O(n) - 추가 배열 필요

### 특징
- 안정적인 정렬 알고리즘
- 대규모 데이터 정렬에 효율적
- 연결 리스트 정렬에 적합
- 일관된 성능

## 3. 힙 정렬 (Heap Sort)

### 개념
힙(최대 힙 또는 최소 힙) 자료구조를 이용한 정렬 알고리즘
최대 힙을 구성한 후 루트 노드(최댓값)를 차례로 추출하여 정렬

### 구현
```javascript
function heapSort(arr) {
    const n = arr.length;
    
    // 최대 힙 구성
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // 힙에서 요소를 하나씩 추출
    for (let i = n - 1; i > 0; i--) {
        // 루트와 마지막 노드 교환
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // 힙 속성 복구
        heapify(arr, i, 0);
    }
    
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    // 왼쪽 자식이 루트보다 크면
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // 오른쪽 자식이 가장 큰 값보다 크면
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // 루트가 가장 큰 값이 아니면
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        
        // 하위 트리도 힙화
        heapify(arr, n, largest);
    }
}
```

### 시간 복잡도
- 최선: O(n log n)
- 평균: O(n log n)
- 최악: O(n log n)

### 공간 복잡도
- O(1) - 제자리 정렬

### 특징
- 불안정한 정렬 알고리즘
- 제자리 정렬 가능
- 최악의 경우에도 O(n log n) 보장
- 우선순위 큐 구현에 활용

## 4. 우선순위 큐 (Priority Queue)

### 개념
각 요소가 우선순위를 가지며, 높은 우선순위의 요소 먼저 처리

### 구현 (힙 기반)
```javascript
class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this.heap = [];
        this.comparator = comparator; // 기본값은 최대 힙
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.size() === 0;
    }
    
    peek() {
        return this.heap[0];
    }
    
    enqueue(value) {
        this.heap.push(value);
        this.siftUp();
        return this.size();
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        
        if (bottom > 0) {
            this.swap(0, bottom);
        }
        
        this.heap.pop();
        this.siftDown();
        return poppedValue;
    }
    
    siftUp() {
        let nodeIdx = this.size() - 1;
        
        while (nodeIdx > 0) {
            const parentIdx = Math.floor((nodeIdx - 1) / 2);
            
            if (this.comparator(this.heap[parentIdx], this.heap[nodeIdx])) break;
            
            this.swap(nodeIdx, parentIdx);
            nodeIdx = parentIdx;
        }
    }
    
    siftDown() {
        let nodeIdx = 0;
        
        while (
            (nodeIdx * 2 + 1) < this.size()
        ) {
            const leftIdx = nodeIdx * 2 + 1;
            const rightIdx = leftIdx + 1;
            
            let childIdx = leftIdx;
            
            if (
                rightIdx < this.size() &&
                this.comparator(this.heap[rightIdx], this.heap[leftIdx])
            ) {
                childIdx = rightIdx;
            }
            
            if (this.comparator(this.heap[nodeIdx], this.heap[childIdx])) break;
            
            this.swap(nodeIdx, childIdx);
            nodeIdx = childIdx;
        }
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
```

### 시간 복잡도
- 삽입: O(log n)
- 추출: O(log n)
- 조회(최댓값/최솟값): O(1)

### 특징
- 동적 데이터에서 최댓값/최솟값을 효율적으로 찾음
- 다익스트라 알고리즘, 프림 알고리즘 등에 활용
- 작업 스케줄링에 활용
- 메모리 효율적인 구현 가능

## 5. 위상 정렬 (Topological Sort)

### 개념
방향 그래프의 노드들을 선형으로 정렬하는 알고리즘
모든 간선의 방향을 준수하면서 노드를 순서대로 나열

### 구현 (DFS 기반)
```javascript
function topologicalSort(graph) {
    const result = [];
    const visited = {};
    const temp = {};
    
    // DFS 기반 위상 정렬
    function dfs(node) {
        // 임시 방문 표시 (사이클 감지용)
        if (temp[node]) throw new Error("Cycle detected, topological sort not possible");
        
        // 이미 방문한 노드는 건너뛰기
        if (visited[node]) return;
        
        temp[node] = true;
        
        // 인접 노드 방문
        for (const neighbor of graph[node]) {
            dfs(neighbor);
        }
        
        temp[node] = false;
        visited[node] = true;
        
        // 방문 완료 후 결과 배열에 추가
        result.unshift(node);
    }
    
    // 모든 노드에 대해 DFS 수행
    for (const node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }
    
    return result;
}
```

### 또 다른 구현 (진입 차수 기반)
```javascript
function topologicalSort(graph, numNodes) {
    const result = [];
    const inDegree = new Array(numNodes).fill(0);
    const queue = [];
    
    // 진입 차수 계산
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor]++;
        }
    }
    
    // 진입 차수가 0인 노드들을 큐에 추가
    for (let i = 0; i < numNodes; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    // BFS 순회
    while (queue.length) {
        const node = queue.shift();
        result.push(node);
        
        // 인접 노드 진입 차수 감소
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            
            // 진입 차수가 0이 되면 큐에 추가
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // 모든 노드를 방문했는지 확인
    return result.length === numNodes ? result : null;
}
```

### 시간 복잡도
- O(V + E) (V: 노드 수, E: 간선 수)

### 특징
- 비순환 방향 그래프(DAG)에서만 사용 가능
- 결과가 유일하지 않을 수 있음
- 선수 과목, 작업 일정 계획 등에 활용
- 의존성 해결 알고리즘에 활용

## 6. 계수 정렬 (Counting Sort)

### 개념
요소의 값 범위가 제한적일 때 사용하는 선형 시간 복잡도의 정렬 알고리즘
각 요소의 등장 횟수를 세어 정렬

### 구현
```javascript
function countingSort(arr, min = 0, max = Math.max(...arr)) {
    // 카운팅 배열 생성 및 초기화
    const count = new Array(max - min + 1).fill(0);
    
    // 각 요소의 빈도 계산
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    
    // 누적 합계 계산
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    
    // 결과 배열 생성
    const output = new Array(arr.length);
    
    // 안정적 정렬을 위해 뒤에서부터 처리
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    return output;
}
```

### 또 다른 간단한 구현
```javascript
function simpleCountingSort(arr, max = Math.max(...arr)) {
    const count = new Array(max + 1).fill(0);
    const result = [];
    
    // 빈도 계산
    for (let num of arr) {
        count[num]++;
    }
    
    // 결과 배열 구성
    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }
    
    return result;
}
```

### 시간 복잡도
- O(n + k) (n: 배열 크기, k: 값의 범위)

### 특징
- 비교 기반이 아닌 정렬 알고리즘
- 제한된 범위의 정수에 매우 효율적
- 안정적인 정렬 알고리즘
- 값의 범위가 크면 비효율적
- 기수 정렬의 서브루틴으로 사용됨


## 3. 정렬 알고리즘 비교

### 3.1 성능 비교

| 알고리즘 | 최선 | 평균 | 최악 | 공간 | 안정성 |
|---------|------|------|------|------|-------|
| 삽입 정렬 | O(n) | O(n²) | O(n²) | O(1) | 안정적 |
| 병합 정렬 | O(n log n) | O(n log n) | O(n log n) | O(n) | 안정적 |
| 힙 정렬 | O(n log n) | O(n log n) | O(n log n) | O(1) | 불안정 |
| 우선순위 큐 | - | - | - | O(n) | - |
| 위상 정렬 | O(V+E) | O(V+E) | O(V+E) | O(V) | 안정적* |
| 계수 정렬 | O(n+k) | O(n+k) | O(n+k) | O(n+k) | 안정적 |

*구현에 따라 달라질 수 있음

### 3.2 실제 활용 상황

- **삽입 정렬**: 작은 데이터셋, 거의 정렬된 데이터, 온라인 알고리즘이 필요한 경우
- **병합 정렬**: 안정성이 중요한 정렬, 연결 리스트 정렬, 외부 정렬
- **힙 정렬**: 메모리 제약이 있는 경우, 최대/최소 요소가 자주 필요한 경우
- **우선순위 큐**: 이벤트 처리, 네트워크 트래픽 관리, 다익스트라 알고리즘
- **위상 정렬**: 스케줄링, 빌드 시스템, 패키지 종속성 해결
- **계수 정렬**: 작은 범위의 정수 데이터셋, 학생 점수 정렬
