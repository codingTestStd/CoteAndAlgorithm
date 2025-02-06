const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const N = Number(input[0])
const tree = new Map()

// 트리 구성
for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i].split(" ")
  tree.set(node, [left, right])
}

let result = ""

// 전위 순회
function preorder(node) {
  if (node === ".") return
  result += node // root
  preorder(tree.get(node)[0]) // left 하위 트리
  preorder(tree.get(node)[1]) // right 하위 트리
}

// 중위 순회
function inorder(node) {
  if (node === ".") return
  inorder(tree.get(node)[0]) // left 하위 트리
  result += node // root
  inorder(tree.get(node)[1]) // right 하위 트리
}

// 후위 순회
function postorder(node) {
  if (node === ".") return
  postorder(tree.get(node)[0]) // left 하위 트리
  postorder(tree.get(node)[1]) // right 하위 트리
  result += node // root
}

// 결과 출력
preorder("A")
result += "\n"
inorder("A")
result += "\n"
postorder("A")

log(result)
