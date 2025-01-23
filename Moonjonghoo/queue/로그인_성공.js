function solution(id_pw, db) {
  const [id, pw] = id_pw;

  for (const [dbId, dbPw] of db) {
    if (id === dbId) {
      return pw === dbPw ? "login" : "wrong pw";
    }
  }

  return "fail";
}
