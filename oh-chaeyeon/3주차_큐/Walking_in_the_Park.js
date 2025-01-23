function solution(park, routes) {
  const directions = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
  let x, y;

  for (let i = 0; i < park.length; i++) {
    const j = park[i].indexOf("S");
    if (j !== -1) {
      x = i;
      y = j;
      break;
    }
  }

  for (const route of routes) {
    const [direction, distanceStr] = route.split(" ");
    const distance = parseInt(distanceStr);
    const [dx, dy] = directions[direction];

    let canMove = true;

    for (let step = 1; step <= distance; step++) {
      const newX = x + dx * step;
      const newY = y + dy * step;

      if (
        newX < 0 ||
        newX >= park.length ||
        newY < 0 ||
        newY >= park[0].length ||
        park[newX][newY] === "X"
      ) {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      x += dx * distance;
      y += dy * distance;
    }
  }

  return [x, y];
}
