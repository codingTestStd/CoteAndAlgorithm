// https://www.acmicpc.net/problem/2263
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// n개의 정점존재, 이진트리의 inorder, postorder 주어지면, preorder 구하기
const n = +input[0]
const inorder = input[1].split(" ").map(Number)
const postorder = input[2].split(" ").map(Number)
let result = ""

// 매번 findIndex하니, 시간초과가 남. => inorder 값의 인덱스를 미리 Map에 저장해두기
const inorderMap = new Map()
inorder.forEach((val, idx) => inorderMap.set(val, idx))

// postorder로 루트 알아내고,
// 그 정보를 통해 inorder에서 왼/오 서브트리 알아내기
// iStart, iEnd: inorder 배열의 범위
// pStart, pEnd: postorder 배열의 범위
const preorder = (iStart, iEnd, pStart, pEnd) => {
  if (iStart > iEnd || pStart > pEnd) return

  const root = postorder[pEnd]
  const rootIdx = inorderMap.get(root)
  result += `${root} `

  const leftSize = rootIdx - iStart // 왼쪽 서브트리 크기

  // 왼쪽 서브트리 처리
  preorder(iStart, rootIdx - 1, pStart, pStart + leftSize - 1)

  // 오른쪽 서브트리 처리
  preorder(rootIdx + 1, iEnd, pStart + leftSize, pEnd - 1)
}

preorder(0, n - 1, 0, n - 1)
log(result.trim())
