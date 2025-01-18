# JavaScript Stack 알고리즘

## 1. 스택의 기본 구현
```javascript
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // 요소 추가
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count - 1;
    }

    // 요소 제거
    pop() {
        if(this.count === 0) return undefined;
        
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // 최상단 요소 확인
    peek() {
        return this.items[this.count - 1];
    }

    // 스택이 비어있는지 확인
    isEmpty() {
        return this.count === 0;
    }

    // 스택 크기 반환
    size() {
        return this.count;
    }

    // 스택 초기화
    clear() {
        this.items = [];
        this.count = 0;
        return this;
    }
}
```

## 2. 스택을 활용한 알고리즘 예시

### 2.1 괄호 매칭 확인
```javascript
function isValidParentheses(str) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (!brackets[char]) {
            stack.push(char);
        } else {
            if (stack.pop() !== brackets[char]) return false;
        }
    }

    return stack.length === 0;
}
```

### 2.2 후위 표기식 계산
```javascript
function evaluatePostfix(expr) {
    const stack = [];
    
    for(let token of expr.split(' ')) {
        if(!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            
            switch(token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }
    
    return stack[0];
}
```

### 2.3 히스토리 관리 (실행 취소/재실행)
```javascript
class UndoRedoStack {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }

    // 작업 수행
    doAction(action) {
        this.undoStack.push(action);
        this.redoStack = []; // 새 작업 시 redo 스택 초기화
    }

    // 실행 취소
    undo() {
        if (this.undoStack.length === 0) return null;
        const action = this.undoStack.pop();
        this.redoStack.push(action);
        return action;
    }

    // 재실행
    redo() {
        if (this.redoStack.length === 0) return null;
        const action = this.redoStack.pop();
        this.undoStack.push(action);
        return action;
    }
}
```

## 3. 시간 복잡도

### 기본 연산
- Push: O(1)
- Pop: O(1)
- Peek: O(1)
- isEmpty: O(1)
- Size: O(1)

### 메모리 사용
- 공간 복잡도: O(n), n은 스택에 저장된 요소의 수

## 4. 활용 사례

### 4.1 함수 호출 스택
```javascript
function first() {
    second();
    console.log('first');
}

function second() {
    third();
    console.log('second');
}

function third() {
    console.log('third');
}

first();
// 출력:
// third
// second
// first
```

### 4.2 웹 브라우저 방문 기록
```javascript
class BrowserHistory {
    constructor() {
        this.history = [];
        this.current = -1;
    }

    visit(url) {
        this.current++;
        this.history[this.current] = url;
        this.history.length = this.current + 1;
    }

    back() {
        if (this.current > 0) {
            this.current--;
            return this.history[this.current];
        }
        return null;
    }

    forward() {
        if (this.current < this.history.length - 1) {
            this.current++;
            return this.history[this.current];
        }
        return null;
    }
}
```

## 5. 주의사항

1. 메모리 관리
   - 스택 크기 제한 고려
   - 메모리 누수 방지를 위한 참조 해제

2. 에러 처리
   - 빈 스택에서의 pop 연산 처리
   - 스택 오버플로우 방지

3. 성능 최적화
   - 배열 크기 동적 조정 최소화
   - 불필요한 복사 연산 방지