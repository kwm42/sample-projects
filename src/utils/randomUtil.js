function random(start, end) {
  return Math.random() * (end - start) + start;
}

module.exports = {
  random
}