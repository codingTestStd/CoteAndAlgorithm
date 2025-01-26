function solution(letter) {
  var answer = "";
  let morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  let arr = letter.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (morse.hasOwnProperty(arr[i])) {
      answer += morse[arr[i]];
    }
  }
  return answer;
}

console.log(solution(".... . .-.. .-.. ---"));
