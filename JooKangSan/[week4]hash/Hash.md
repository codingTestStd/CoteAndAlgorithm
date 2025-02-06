# JavaScript Hash(Map) Algorithm

## 1. 해시(Hash)란?
키-값 쌍으로 데이터를 저장하는 자료구조로, 빠른 데이터 검색을 지원합니다.

### 기본 특성
- 고유한 키를 통해 값에 접근
- 상수 시간 O(1)의 검색 복잡도
- 충돌 처리 메커니즘 필요

## 2. 자바스크립트에서 해시 구현 방법

### 2.1 객체를 사용한 기본 구현
```javascript
// 기본적인 객체 사용
const hash = {};

// 데이터 추가
hash['key'] = 'value';

// 데이터 접근
console.log(hash['key']); // 'value'

// 데이터 삭제
delete hash['key'];

// 키 존재 확인
console.log('key' in hash);
```

### 2.2 Map 객체 사용
```javascript
// Map 객체 생성
const hashMap = new Map();

// 데이터 추가
hashMap.set('key', 'value');

// 데이터 접근
console.log(hashMap.get('key')); // 'value'

// 데이터 삭제
hashMap.delete('key');

// 키 존재 확인
console.log(hashMap.has('key'));
```

## 3. 해시의 주요 활용 사례

### 3.1 빈도수 계산
```javascript
function countFrequency(arr) {
    const frequency = {};
    
    for(const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    
    return frequency;
}

// 사용 예시
const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(countFrequency(arr)); // { a: 3, b: 2, c: 1 }
```

### 3.2 중복 제거
```javascript
function removeDuplicates(arr) {
    const hash = {};
    const result = [];
    
    for(const item of arr) {
        if(!hash[item]) {
            hash[item] = true;
            result.push(item);
        }
    }
    
    return result;
}

// 사용 예시
console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
```

### 3.3 Two Sum 문제
```javascript
function findTwoSum(nums, target) {
    const hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if(complement in hash) {
            return [hash[complement], i];
        }
        
        hash[nums[i]] = i;
    }
    
    return null;
}

// 사용 예시
console.log(findTwoSum([2, 7, 11, 15], 9)); // [0, 1]
```

## 4. 성능 고려사항

### 4.1 시간 복잡도
- 삽입: O(1)
- 삭제: O(1)
- 검색: O(1)
- 충돌이 많은 경우: O(n)

### 4.2 공간 복잡도
- O(n), 여기서 n은 저장된 키-값 쌍의 수

### 4.3 주의사항
1. 해시 충돌 처리
   - 체이닝
   - 개방 주소법

2. 메모리 사용
   - 적절한 초기 크기 설정
   - 동적 크기 조정

3. 키 선택
   - 고른 분포의 해시값
   - 효율적인 해시 함수

## 5. Map vs Object 비교

### 5.1 Map의 장점
- 키로 모든 타입 사용 가능
- 순서 보장
- 크기를 쉽게 알 수 있음
- 순회가 더 편리함

### 5.2 Object의 장점
- 리터럴 문법 지원
- JSON과의 호환성
- 프로토타입 체인
- 더 적은 메모리 사용

### 5.3 사용 예시
```javascript
// Map
const map = new Map();
map.set(1, 'one');
map.set({}, 'object');
map.set(() => {}, 'function');

// Object
const obj = {
    1: 'one',
    'key': 'value'
};
```