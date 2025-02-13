function solution(name, yearning, photo) {
    const scoreMap = {};

    name.forEach((n, i) => scoreMap[n] = yearning[i]);
    
    return photo.map(p => 
        p.reduce((sum, person) => sum + (scoreMap[person] || 0), 0)
    );
}