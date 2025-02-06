## 1. 트리(Tree)란?
계층적 관계를 표현하는 비선형 자료구조로, 노드들과 노드들을 연결하는 간선들로 구성됩니다.

### 1.1 기본 용어
- 노드(Node): 트리의 기본 요소
- 루트(Root): 트리의 최상위 노드
- 간선(Edge): 노드를 연결하는 선
- 부모 노드: 상위 노드
- 자식 노드: 하위 노드
- 리프 노드: 자식이 없는 노드
- 깊이(Depth): 루트에서 특정 노드까지의 거리
- 높이(Height): 트리의 최대 깊이

## 2. 이진 트리 구현

### 2.1 노드 클래스
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

### 2.2 이진 트리 클래스
```javascript
class BinaryTree {
    constructor() {
        this.root = null;
    }
    
    // 노드 삽입
    insert(value) {
        const newNode = new Node(value);
        
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        while(true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}
```

## 3. 트리 순회 방법

### 3.1 전위 순회(Pre-order)
```javascript
preOrder(node = this.root, result = []) {
    if (node) {
        result.push(node.value);  // 현재 노드
        this.preOrder(node.left, result);  // 왼쪽 서브트리
        this.preOrder(node.right, result); // 오른쪽 서브트리
    }
    return result;
}
```

### 3.2 중위 순회(In-order)
```javascript
inOrder(node = this.root, result = []) {
    if (node) {
        this.inOrder(node.left, result);   // 왼쪽 서브트리
        result.push(node.value);           // 현재 노드
        this.inOrder(node.right, result);  // 오른쪽 서브트리
    }
    return result;
}
```

### 3.3 후위 순회(Post-order)
```javascript
postOrder(node = this.root, result = []) {
    if (node) {
        this.postOrder(node.left, result);  // 왼쪽 서브트리
        this.postOrder(node.right, result); // 오른쪽 서브트리
        result.push(node.value);            // 현재 노드
    }
    return result;
}
```

### 3.4 레벨 순회(Level-order)
```javascript
levelOrder() {
    if (!this.root) return [];
    
    const result = [];
    const queue = [this.root];
    
    while (queue.length) {
        const node = queue.shift();
        result.push(node.value);
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return result;
}
```

## 4. 이진 검색 트리(BST)

### 4.1 기본 구현
```javascript
class BST {
    constructor() {
        this.root = null;
    }
    
    // 노드 삽입
    insert(value) {
        const newNode = new Node(value);
        
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    
    // 값 찾기
    find(value) {
        if (!this.root) return false;
        
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}
```

## 5. 성능 고려사항

### 5.1 시간 복잡도
- 삽입: O(log n) - 균형 트리의 경우
- 검색: O(log n) - 균형 트리의 경우
- 삭제: O(log n) - 균형 트리의 경우
- 최악의 경우: O(n) - 불균형 트리의 경우

### 5.2 공간 복잡도
- O(n) - n은 노드의 수

## 6. 트리 관련 알고리즘

### 6.1 최소 공통 조상(LCA) 찾기
```javascript
function findLCA(root, n1, n2) {
    if (!root) return null;
    
    if (root.value === n1 || root.value === n2) {
        return root;
    }
    
    const left = findLCA(root.left, n1, n2);
    const right = findLCA(root.right, n1, n2);
    
    if (left && right) return root;
    
    return left ? left : right;
}
```

### 6.2 트리의 깊이 찾기
```javascript
function findDepth(root) {
    if (!root) return 0;
    return Math.max(findDepth(root.left), findDepth(root.right)) + 1;
}
```