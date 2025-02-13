// https://www.acmicpc.net/problem/5639
// 이진 검색트리의 전위 순회 경과가 주어지면, 후위순회 결과 구하기
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const arr = input.map(Number)

const postorder = (root, end) => {
  if (root > end) return

  let right = end + 1 // 오른쪽 서브트리(루트보다 큰 요소들) 시작점 구하기
  for (let i = root + 1; i <= end; i++) {
    if (arr[i] > arr[root]) {
      right = i
      break
    }
  }

  // 후위 순위로 출력
  postorder(root + 1, right - 1)
  postorder(right, end)
  log(arr[root])
}

postorder(0, arr.length - 1)
