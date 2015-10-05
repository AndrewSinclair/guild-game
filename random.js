var Random = (function() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }

  function getRandomFromArray(array) {
    var length = array.length;

    return array[getRandomInt(0, length - 1)];
  }

  return {
    getRandomInt: getRandomInt,
    getRandomFromArray: getRandomFromArray
  };
})();