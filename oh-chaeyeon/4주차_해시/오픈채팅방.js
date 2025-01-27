function solution(record) {
  const nicknames = {};
  const result = [];

  record.forEach((entry) => {
    const [action, userId, nickname] = entry.split(" ");
    if (action !== "Leave") {
      nicknames[userId] = nickname;
    }
  });

  record.forEach((entry) => {
    const [action, userId] = entry.split(" ");
    if (action === "Enter") {
      result.push(`${nicknames[userId]}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      result.push(`${nicknames[userId]}님이 나갔습니다.`);
    }
  });

  return result;
}
