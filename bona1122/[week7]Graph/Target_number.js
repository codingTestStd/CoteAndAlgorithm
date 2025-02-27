// DFS 풀이
function solution(numbers, target) {
  let result = 0

  const dfs = (acc, depth) => {
    if (depth === numbers.length) {
      if (acc === target) result++
      return
    }
    dfs(acc + numbers[depth], depth + 1)
    dfs(acc - numbers[depth], depth + 1)
  }

  dfs(0, 0)
  return result
}

// BFS 풀이
function solution(numbers, target) {
  let result = 0
  const queue = []

  queue.push([0, 0]) // [합계, 처리할 인덱스]

  while (queue.length) {
    const [acc, depth] = queue.shift()

    if (depth === numbers.length) {
      if (acc === target) result++
      continue
    }

    queue.push([acc + numbers[depth], depth + 1])
    queue.push([acc - numbers[depth], depth + 1])
  }

  return result
}
