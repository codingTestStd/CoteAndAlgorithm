const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []
rl.on("line", (line) => {
  input.push(line)
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number)
  const parent = Array.from({ length: n + 1 }, (_, idx) => idx)

  const findParent = (x, parent) => {
    if (parent[x] !== x) {
      parent[x] = findParent(parent[x], parent)
    }
    return parent[x]
  }
  const union = (a, b) => {
    a = findParent(a, parent)
    b = findParent(b, parent)
    if (a < b) parent[b] = a
    else parent[a] = b
  }

  let result = ""
  for (let i = 1; i <= m; i++) {
    let [op, a, b] = input[i].split(" ").map(Number)
    if (op === 0) {
      union(a, b)
    } else {
      if (findParent(a, parent) === findParent(b, parent)) result += "YES\n"
      else result += "NO\n"
    }
  }

  console.log(result.trim())
  process.exit()
})
