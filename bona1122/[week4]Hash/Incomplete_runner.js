// 완주자 목록으로 해시맵 생성
const solution = (participant, completion) => {
  const completionMap = completion.reduce((map, person) => {
    map[person] = (map[person] || 0) + 1
    return map
  }, {})

  return participant.find((person) => {
    if (completionMap[person]) {
      completionMap[person]--
      return false
    }
    return true
  })
}
