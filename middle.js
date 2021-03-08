const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    const i = (array.length / 2) - 0.5;
    middle.push(array[i]);
    return middle;
  }
  if (array.length % 2 === 0) {
    const iOne = (array.length / 2) - 1;
    const iTwo = array.length / 2;
    middle.push(array[iOne]);
    middle.push(array[iTwo]);
    return middle;
  }
};

module.exports = middle;
