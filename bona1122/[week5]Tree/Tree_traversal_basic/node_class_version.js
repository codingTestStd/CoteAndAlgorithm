// https://www.acmicpc.net/problem/1991
// 이진 트리 입력되면, 전위순회/중위순회/후위순회 출력하기

const fs = require("fs")
const path = require("path")
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt")
let input = fs.readFileSync(filePath).toString().split("\n")
const log = console.log

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  findNode(value, node = this.root) {
    if (!node) return null
    if (node.value === value) return node
    return this.findNode(value, node.left) || this.findNode(value, node.right)
  }

  insert(value, left, right) {
    if (!this.root) {
      this.root = new Node(value)
      if (left !== ".") this.root.left = new Node(left)
      if (right !== ".") this.root.right = new Node(right)
    } else {
      const node = this.findNode(value)
      if (left !== ".") node.left = new Node(left)
      if (right !== ".") node.right = new Node(right)
    }
  }
}

const N = Number(input[0])
const tree = new BinaryTree()
let result = ""

for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i].split(" ")
  tree.insert(node, left, right)
}

// 전위 순회
function preorder(node) {
  if (!node) return
  result += node.value
  preorder(node.left)
  preorder(node.right)
}

// 중위 순회
function inorder(node) {
  if (!node) return
  inorder(node.left)
  result += node.value
  inorder(node.right)
}

// 후위 순회
function postorder(node) {
  if (!node) return
  postorder(node.left)
  postorder(node.right)
  result += node.value
}

preorder(tree.root)
result += "\n"
inorder(tree.root)
result += "\n"
postorder(tree.root)

log(result)
