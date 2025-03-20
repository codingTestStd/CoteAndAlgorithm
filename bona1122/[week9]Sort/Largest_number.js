// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const convertString = numbers.map((number) => number.toString())
  const sorted = convertString.sort((a, b) => {
    const AB = Number(a + b)
    const BA = Number(b + a)
    return BA - AB
  })
  const result = sorted.join("")
  return result[0] === "0" ? "0" : result
}
