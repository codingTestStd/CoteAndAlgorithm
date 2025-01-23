function solution(score) {
  var answer = [];
  let grades = [];
  
  for(let i=0; i<score.length; i++) {
      grades.push({
          score: (score[i][0] + score[i][1]) / 2,
          idx: i,
      })
  }
  grades.sort((a,b) => b.score - a.score);
  
  for(let i=0; i<grades.length; i++) {
      grades[i].grade = i+1;
      for(let j=i+1; j<grades.length; j++) {
          if(grades[i].score === grades[j].score){
              grades[j].grade = grades[i].grade;
              i++;
          } else {
              grades[j].grade = j+1;
              break;
          }

      }
  }
  
  grades.sort((a,b) => a.idx - b.idx);
  answer = grades.map((el) => el.grade);
  
  return answer;
}