function solution(participant, completion) {
  // 두 배열 sort로 정렬
  participant.sort();
  completion.sort();

  // 참가자 배열 길이만큼 순회
  for (let i = 0; i < participant.length; i++) {
    // 참가자 배열에 [i]와 완주자 배열의[i]가 다르면 탈락한 참가자로 판단
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
