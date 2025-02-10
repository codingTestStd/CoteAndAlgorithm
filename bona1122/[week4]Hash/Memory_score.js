const solution = (name, yearning, photo) => {
  const map = name.reduce((map, name, idx) => {
    map[name] = yearning[idx]
    return map
  }, {})

  return photo.map((p) => p.reduce((acc, cur) => (acc += map[cur] || 0), 0))
}
