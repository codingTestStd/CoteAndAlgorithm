const solution = (maps) => {
  const n = maps.length
  const m = maps[0].length
  const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]
  const visited = Array.from({ length: n }, () => Array(m).fill(false))
  visited[0][0] = true
  const q = [[0, 0, 1]] // [x,y,거리] 저장

  while (q.length) {
    let [x, y, depth] = q.shift()
    if (x === n - 1 && y === m - 1) {
      return depth
    }
    for (let [dx, dy] of dir) {
      let nx = x + dx
      let ny = y + dy
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (maps[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true
          q.push([nx, ny, depth + 1])
        }
      }
    }
  }

  return -1
}
