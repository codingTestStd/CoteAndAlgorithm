function solution(id_pw, db) {
  const [id, pw] = id_pw; // 아이디, 패스워드 분리
  const map = new Map(db); // db를 기반으로 Map 객체 생성
  console.log(map);

  if (map.has(id)) {
    // map 객체에 id 가 있을때
    if (map.get(id) === pw) {
      // 아이디와 패스워드가 일치하면
      return "login"; // 'login' 반환
    } else return "wrong pw"; // 아이디는 같은데 패스워드만 틀리면 'wrong pw' 반환
  } else return "fail"; // 둘 다 틀리면 'fail' 반환
}
