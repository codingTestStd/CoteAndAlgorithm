# 배열 알고리즘 & 시간복잡도 정리

## 1. 배열 관련 내장 함수

### 1.1 map
- 설명: 각 요소에 함수를 적용하여 새 배열을 만듭니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3];
  const doubled = arr.map(x => x * 2);
  console.log(doubled); // [2, 4, 6]
  ```

### 1.2 filter
- 설명: 조건을 충족하는 요소만으로 새 배열을 만듭니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3, 4];
  const evens = arr.filter(x => x % 2 === 0);
  console.log(evens); // [2, 4]
  ```

### 1.3 reduce
- 설명: 배열을 하나의 값으로 축소합니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(sum); // 10
  ```

### 1.4 forEach
- 설명: 배열의 각 요소에 대해 제공된 함수를 실행합니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3];
  arr.forEach(x => console.log(x));
  ```

### 1.5 push
- 설명: 배열의 끝에 하나 이상의 요소를 추가합니다.
- 시간복잡도: O(1)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // [1, 2, 3, 4]
  ```

### 1.6 pop
- 설명: 배열의 마지막 요소를 제거합니다.
- 시간복잡도: O(1)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3, 4];
  arr.pop();
  console.log(arr); // [1, 2, 3]
  ```

### 1.7  unshift
- 설명: 배열의 시작 부분에 하나 이상의 요소를 추가합니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3];
  arr.unshift(0);
  console.log(arr); // [0, 1, 2, 3]
  ```

### 1.8 shift
- 설명: 배열의 첫 번째 요소를 제거합니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3];
  arr.shift();
  console.log(arr); // [2, 3]
  ```

## 2. 검색 알고리즘

### 2.1 선형 검색
- 설명: 배열의 각 요소를 순차적으로 확인하여 목표값을 찾습니다.
- 시간복잡도: O(n)
- 예시 코드:
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.indexOf(3)); // 2
  console.log(arr.find(x => x > 3)); // 4
  ```

### 2.2 이진 검색
- 설명: 정렬된 배열에서 중간값을 기준으로 탐색 범위를 좁혀가며 목표값을 찾습니다.
- 시간복잡도: O(log n)
- 예시 코드:
  ```javascript
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  const arr = [1, 2, 3, 4, 5];
  console.log(binarySearch(arr, 3)); // 2
  ```

## 3. 정렬 알고리즘

### 3.1 기본 정렬
- 설명: 배열의 요소를 사전순 또는 사용자 정의 순서에 따라 정렬합니다.
- 시간복잡도: 평균 O(n log n)
- 예시 코드:
  ```javascript
  const arr = [4, 2, 5, 1, 3];
  arr.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
  ```

### 3.2 버블 정렬
- 설명: 인접한 두 요소를 비교하여 정렬합니다.
- 시간복잡도: O(n^2)
- 예시 코드:
  ```javascript
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  const arr = [4, 2, 5, 1, 3];
  console.log(bubbleSort(arr)); // [1, 2, 3, 4, 5]
  ```

### 3.3 퀵 정렬
- 설명: 기준 값을 정하고 이를 기준으로 배열을 분할하여 정렬합니다.
- 시간복잡도: 평균 O(n log n)
- 예시 코드:
  ```javascript
  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = arr.slice(1).filter(x => x < pivot);
    const right = arr.slice(1).filter(x => x >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  const arr = [4, 2, 5, 1, 3];
  console.log(quickSort(arr)); // [1, 2, 3, 4, 5]
  ```

### 3.4 병합 정렬
- 설명: 배열을 반으로 나누어 정렬한 뒤 병합합니다.
- 시간복잡도: O(n log n)
- 예시 코드:
  ```javascript
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    function merge(left, right) {
      const result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
      }
      return [...result, ...left, ...right];
    }

    return merge(left, right);
  }

  const arr = [4, 2, 5, 1, 3];
  console.log(mergeSort(arr)); // [1, 2, 3, 4, 5]
  ```