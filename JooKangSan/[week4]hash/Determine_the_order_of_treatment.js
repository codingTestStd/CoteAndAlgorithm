function solution(emergency) {
    const orderMap = {};
    
    const sorted = [...emergency].sort((a, b) => b - a);
    
    sorted.forEach((value, index) => {
        orderMap[value] = index + 1;
    });
    
    return emergency.map(value => orderMap[value]);
}