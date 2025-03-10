# 그래프 (Graph) 이론

## 1. 그래프의 정의
- 정점(Vertex)과 간선(Edge)으로 구성된 데이터 구조
- 객체 간의 관계를 표현하는 추상적 네트워크

## 3. 그래프의 종류
### 3.1 방향성에 따른 분류
1. 방향 그래프(Directed Graph)
   - 간선에 방향성 존재
   - 일방향 관계 표현

2. 무방향 그래프(Undirected Graph)
   - 간선에 방향성 없음
   - 양방향 관계 표현

### 3.2 연결성에 따른 분류
1. 연결 그래프(Connected Graph)
   - 모든 정점이 서로 연결됨

2. 비연결 그래프(Disconnected Graph)
   - 일부 정점이 연결되지 않음

### 3.3 특수한 그래프
- 트리(Tree)
- 완전 그래프(Complete Graph)
- 이분 그래프(Bipartite Graph)

## 4. 그래프 표현 방법
### 4.1 인접 행렬(Adjacency Matrix)
```javascript
class GraphAdjacencyMatrix {
    constructor(vertices) {
        this.vertices = vertices;
        this.matrix = Array(vertices).fill().map(() => Array(vertices).fill(0));
    }

    addEdge(v1, v2) {
        this.matrix[v1][v2] = 1;
        this.matrix[v2][v1] = 1; // 무방향 그래프의 경우
    }
}
```

### 4.2 인접 리스트(Adjacency List)
```javascript
class GraphAdjacencyList {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // 무방향 그래프
    }
}
```

## 5. 그래프 탐색 알고리즘
### 5.1 깊이 우선 탐색 (DFS)
```javascript
function dfs(graph, startVertex) {
    const visited = new Set();
    
    function explore(vertex) {
        visited.add(vertex);
        console.log(vertex);
        
        for (let neighbor of graph.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
                explore(neighbor);
            }
        }
    }
    
    explore(startVertex);
}
```

### 5.2 너비 우선 탐색 (BFS)
```javascript
function bfs(graph, startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);
    
    while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
        
        for (let neighbor of graph.adjacencyList[currentVertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

## 6. 최단 경로 알고리즘
### 6.1 다익스트라 알고리즘
```javascript
function dijkstra(graph, startVertex) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    
    // 초기화 로직
    for (let vertex in graph.adjacencyList) {
        if (vertex === startVertex) {
            distances[vertex] = 0;
            pq.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
        }
        previous[vertex] = null;
    }
    
    // 최단 경로 탐색 로직
    while (!pq.isEmpty()) {
        let currentVertex = pq.dequeue().val;
        
        for (let neighbor in graph.adjacencyList[currentVertex]) {
            // 거리 계산 및 업데이트 로직
        }
    }
    
    return { distances, previous };
}
```

## 7. 그래프 문제 주의 사항
1. 그래프 표현 방법 선택
2. 적절한 탐색 알고리즘 적용
3. 방문 체크로 무한 루프 방지
4. 메모리 효율성 고려

## 8. 시간 복잡도
- DFS/BFS: O(V + E)
- 다익스트라: O((V + E)logV)
- 플로이드-워셜: O(V³)