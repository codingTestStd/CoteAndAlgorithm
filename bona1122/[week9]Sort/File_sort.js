// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const regex = /([^0-9]+)([0-9]+)(.*)/
  files = files.map((file, idx) => ({
    name: file,
    parts: file.match(regex),
    originalIndex: idx,
  }))

  files = files.sort((a, b) => {
    {
      // HEAD 부분 비교 (대소문자 무시)
      const headA = a.parts[1].toLowerCase()
      const headB = b.parts[1].toLowerCase()

      if (headA < headB) return -1
      if (headA > headB) return 1

      // HEAD가 같으면 NUMBER 부분 비교 (숫자로 비교)
      const numberA = Number(a.parts[2])
      const numberB = Number(b.parts[2])

      if (numberA < numberB) return -1
      if (numberA > numberB) return 1

      // HEAD와 NUMBER가 모두 같으면 원래 순서 유지
      return a.originalIndex - b.originalIndex
    }
  })

  return files.map((file) => file.name)
}
