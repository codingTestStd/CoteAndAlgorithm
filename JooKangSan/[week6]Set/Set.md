## 1. Set(집합)
- 중복을 허용하지 않는 값들의 모음을 표현하는 자료구조,
- 수학의 집합 개념을 구현한 자료구조

## 2. Set 구현

### 2.1 기본 생성
```javascript
// Set 생성
const set = new Set();
const setFromArray = new Set([1, 2, 3]);

// 값 추가/삭제
set.add(4);         // 값 추가
set.delete(4);      // 값 삭제
set.clear();        // 모든 값 삭제

// 값 확인
set.has(4);         // 값 존재 여부
set.size;           // Set 크기
```

### 2.2 기본 연산
```javascript
class CustomSet {
    constructor() {
        this.items = {};
    }
    
    // 원소 추가
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    
    // 원소 삭제
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
    
    // 원소 확인
    has(element) {
        return element in this.items;
    }
    
    // 모든 원소 반환
    values() {
        return Object.values(this.items);
    }
}
```

## 3. Set 연산 메서드

### 3.1 합집합(Union)
```javascript
function union(setA, setB) {
    const unionSet = new Set(setA);
    for (const element of setB) {
        unionSet.add(element);
    }
    return unionSet;
}
```

### 3.2 교집합(Intersection)
```javascript
function intersection(setA, setB) {
    const intersectionSet = new Set();
    for (const element of setA) {
        if (setB.has(element)) {
            intersectionSet.add(element);
        }
    }
    return intersectionSet;
}
```

### 3.3 차집합(Difference)
```javascript
function difference(setA, setB) {
    const differenceSet = new Set(setA);
    for (const element of setB) {
        differenceSet.delete(element);
    }
    return differenceSet;
}
```

### 3.4 부분집합(Subset) 확인
```javascript
function isSubset(setA, setB) {
    for (const element of setA) {
        if (!setB.has(element)) {
            return false;
        }
    }
    return true;
}
```

## 4. Set 활용

### 4.1 배열 중복 제거
```javascript
function removeDuplicates(array) {
    return [...new Set(array)];
}

// 예시
const array = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(array)); // [1, 2, 3, 4]
```

### 4.2 문자열 중복 문자 제거
```javascript
function removeDuplicateChars(str) {
    return [...new Set(str)].join('');
}

// 예시
console.log(removeDuplicateChars('hello')); // 'helo'
```

## 5. 성능 고려사항

### 5.1 시간 복잡도
- 추가(add): O(1)
- 삭제(delete): O(1)
- 검색(has): O(1)
- 크기 확인(size): O(1)

### 5.2 공간 복잡도
- O(n), n은 저장된 원소의 수