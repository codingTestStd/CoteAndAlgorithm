function solution(before, after) {
  let hash1 = new Map();
  let hash2 = new Map();

  for (let i = 0; i < before.length; i++) {
    hash1.set(before[i], (hash1.get(before[i]) || 0) + 1);
    hash2.set(after[i], (hash2.get(after[i]) || 0) + 1);
  }

  // Map 비교 함수
  function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false; // 크기 비교
    for (let [key, value] of map1) {
      if (map2.get(key) !== value) return false; // 키-값 비교
    }
    return true;
  }

  // 비교 결과 반환
  return compareMaps(hash1, hash2) ? 1 : 0;
}

console.log(solution("olleh", "hello")); // 1
console.log(solution("apple", "ppale")); // 0

console.log(solution("olleh", "hello"));

//바꿀수있다는것은 구성 요소의 종류와 개수가 같으면됩니다.
