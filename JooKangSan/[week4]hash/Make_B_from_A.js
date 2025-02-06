function solution(before, after) {
    const hash = {};
    
    for(let char of before) {
        hash[char] = (hash[char] || 0) + 1;
    }
    
    for(let char of after) {
        if(!hash[char]) return 0;
        hash[char]--;
    }
    
    // 모든 값이 0이면 1 반환
    return Object.values(hash).every(count => count === 0) ? 1 : 0;
}