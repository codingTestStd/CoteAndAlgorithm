// 소수인지판별하는 함수
function isPrime(n) {
  if (n < 2) return false
  if (n === 2) return true // 2는 소수
  if (n % 2 === 0) return false // 짝수는 소수가 아님

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

// 조각 조합해서 소수 몇개 만들수 있는지 -> "중복없이" "순서있게" 고르기
function solution(numbers) {
  const set = new Set()
  const visited = Array(numbers.length).fill(false)
  const selected = []

  const dfs = () => {
    if (selected.length > 0) {
      const num = Number(selected.join(""))
      if (isPrime(num)) set.add(num)
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) continue
      visited[i] = true
      selected.push(+numbers[i])
      dfs()
      visited[i] = false
      selected.pop()
    }
  }
  dfs()
  return set.size
}
