module.exports = function reverse (n) {
  let result = Array.from(Math.abs(n).toString()).reverse();
  return +result.join('');
}

