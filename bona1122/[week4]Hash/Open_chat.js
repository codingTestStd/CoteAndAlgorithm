function solution(record) {
  const userInfo = {}
  const result = []
  const MESSAGES = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  }

  record.forEach((r) => {
    const [action, id, name] = r.split(" ")
    if (name) userInfo[id] = name
    if (action !== "Change") {
      result.push([id, MESSAGES[action]])
    }
  })

  return result.map(([id, message]) => userInfo[id] + message)
}
