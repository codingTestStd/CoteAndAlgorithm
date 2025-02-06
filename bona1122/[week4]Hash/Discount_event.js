// 방법 1: 매번 slice로 새 배열과 객체를 생성
function solution1(want, number, discount) {
  let answer = 0
  const map = want.reduce((map, name, idx) => {
    map[name] = number[idx]
    return map
  }, {})

  const check = (sale) => {
    for (let item in map) {
      if (map[item] !== sale[item]) return false
    }
    return true
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const sliced = discount.slice(i, i + 10)
    const sale = sliced.reduce((map, name) => {
      map[name] = (map[name] || 0) + 1
      return map
    }, {})

    if (check(sale)) answer++
  }

  return answer
}

// 방법 2: 슬라이딩 윈도우
function solution2(want, number, discount) {
  const need = want.reduce((obj, name, idx) => {
    obj[name] = number[idx]
    return obj
  }, {})

  // 초기 윈도우(첫 10일) 설정
  const sale = {}
  for (let i = 0; i < 10; i++) {
    sale[discount[i]] = (sale[discount[i]] || 0) + 1
  }

  const check = () => {
    for (let item in need) {
      if (need[item] !== sale[item]) return false
    }
    return true
  }

  let answer = check() ? 1 : 0

  // 슬라이딩 윈도우 이동
  for (let i = 10; i < discount.length; i++) {
    sale[discount[i]] = (sale[discount[i]] || 0) + 1 // 새로운 것 추가
    sale[discount[i - 10]]-- // 이전 것 제거

    if (check()) answer++
  }

  return answer
}
