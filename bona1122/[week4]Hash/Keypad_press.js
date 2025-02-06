// 방법 1: 객체기반 접근(각 숫자의 좌표 직접 매핑 - 하드코딩)
function solution1(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  }

  let left = keypad["*"]
  let right = keypad["#"]

  const getDist = ([y1, x1], [y2, x2]) => Math.abs(y1 - y2) + Math.abs(x1 - x2)

  return numbers
    .map((num) => {
      const target = keypad[num]

      // 왼쪽 열이면, 왼손
      if (target[1] === 0) {
        left = target
        return "L"
      }
      // 오른쪽 열이면, 오른손
      if (target[1] === 2) {
        right = target
        return "R"
      }

      // 가운데열의 경우, 거리 비교
      const leftDist = getDist(left, target)
      const rightDist = getDist(right, target)

      if (leftDist === rightDist) {
        if (hand === "right") {
          right = target
          return "R"
        }
        left = target
        return "L"
      }

      if (leftDist < rightDist) {
        left = target
        return "L"
      } else {
        right = target
        return "R"
      }
    })
    .join("")
}

// 방법 2: 2차원 배열로 실제 키패드 모양 표현 후, 좌표 매핑
function solution2(numbers, hand) {
  // 키패드를 2차원 배열로 정의
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ]

  // 키패드를 좌표로 매핑
  const getPos = new Map(
    keypad.flatMap((row, y) => row.map((num, x) => [num, [y, x]]))
  )

  let left = getPos.get("*")
  let right = getPos.get("#")

  const getDist = ([y1, x1], [y2, x2]) => Math.abs(y1 - y2) + Math.abs(x1 - x2)

  return numbers
    .map((num) => {
      const target = getPos.get(num)

      // 왼쪽 열이면, 왼손
      if (target[1] === 0) {
        left = target
        return "L"
      }
      // 오른쪽 열이면, 오른손
      if (target[1] === 2) {
        right = target
        return "R"
      }

      // 가운데 열
      const leftDist = getDist(left, target)
      const rightDist = getDist(right, target)

      if (leftDist === rightDist) {
        if (hand === "right") {
          right = target
          return "R"
        }
        left = target
        return "L"
      }

      if (leftDist < rightDist) {
        left = target
        return "L"
      } else {
        right = target
        return "R"
      }
    })
    .join("")
}
