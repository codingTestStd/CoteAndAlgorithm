// 출발점부터 빠르게 레버있는 곳으로 간 후, 다시 레버에서 탈출구로 가는 것 목표. 못가면 -1 반환
const solution = (maps) => {
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const n = maps.length
  const m = maps[0].length
  let S, L, E
  // 시작, 레버, 출구 위치 저장하고
  // 시작 - 레버 / 레버 - 출구 경로의 최단경로 더하기
  maps = maps.map((row, x) => {
    row = row.split("")
    row.forEach((item, y) => {
      if (item === "S") S = [x, y]
      if (item === "L") L = [x, y]
      if (item === "E") E = [x, y]
    })
    return row
  })

  const bfs = (start, end) => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false))
    const q = [[...start, 0]]

    while (q.length) {
      let [x, y, dist] = q.shift()
      if (x === end[0] && y === end[1]) return dist

      for (let [dx, dy] of dir) {
        let [nx, ny] = [x + dx, y + dy]
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (!visited[nx][ny] && maps[nx][ny] !== "X") {
            visited[nx][ny] = true
            q.push([nx, ny, dist + 1])
          }
        }
      }
    }

    return -1
  }

  let toL = bfs(S, L)
  if (toL === -1) return -1
  let toE = bfs(L, E)
  if (toE === -1) return -1

  return toL + toE
}
