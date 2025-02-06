function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((name, i) => name !== completion[i]);
}