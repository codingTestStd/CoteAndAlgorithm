function solution(my_string) {
    var answer = [];
    for (let char of my_string) {
        if (!isNaN(parseInt(char))) {
            answer.push(parseInt(char));
        }
    }
    return answer.sort((a, b) => a - b);
}