function solution(name, yearning, photo) {
  return photo.map((p) =>
    p.reduce((sum, person) => {
      const index = name.indexOf(person);
      return sum + (index !== -1 ? yearning[index] : 0);
    }, 0)
  );
}
