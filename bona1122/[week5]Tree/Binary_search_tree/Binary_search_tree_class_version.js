// https://www.acmicpc.net/problem/5639
// 이진 검색트리의 전위 순회 경과가 주어지면, 후위순회 결과 구하기

// 핵심: BST의 전위순회 결과가 있기에, 순서대로 트리에 삽입하면 트리가 복원된다
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const arr = input.map(Number)

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value)
          break
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = new Node(value)
          break
        }
        current = current.right
      }
    }
  }

  postorder(node = this.root) {
    if (!node) return

    this.postorder(node.left) // 왼쪽 서브트리 순회
    this.postorder(node.right) // 오른쪽 서브트리 순회
    log(node.value) // 현재 노드 출력
  }
}

const tree = new BinarySearchTree()
arr.forEach((item) => tree.insert(item))
tree.postorder()
