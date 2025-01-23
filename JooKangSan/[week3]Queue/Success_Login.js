function solution(id_pw, db) {
  let queue = [...db];
  
  const [id, pw] = id_pw;
  let hasId = false;
  
  while(queue.length > 0) {
      const [dbId, dbPw] = queue.shift();
      
      if(dbId === id) {
          hasId = true;
          if(dbPw === pw) {
              return "login";
          }
      }
  }
  
  return hasId ? "wrong pw" : "fail";
}