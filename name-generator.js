var NameGenerator = (function() {
  function getRandomConsanant() {
    var consanants = 'bcdfghjklmnpqrstvwxz'
      , numConsanants = consanants.length;

    return consanants.charAt(Random.getRandomInt(0, numConsanants - 1));
  }

  function getRandomVowel() {
    var vowels = 'aeiou'
      , numVowels = vowels.length;

    return vowels.charAt(Random.getRandomInt(0, numVowels -1));
  }

  function findSpaces(stringArray) {
    var spaces = [];

    for(var i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === ' ') {
        spaces.push(i);
      }
    }

    return spaces;
  }

  function toTitleCase(name) {
    var output = name.toLowerCase()
      , stringArray = output.split('')
      , spaces = findSpaces(stringArray);

    spaces.push(-1);

    for(var i = 0; i < spaces.length && spaces[i] < stringArray.length - 1; i++) {
      stringArray[spaces[i] + 1] = stringArray[spaces[i] + 1].toUpperCase();
    }

    return stringArray.join('');
  }

  function getName() {
    var name = ''
      , numSyllables = Random.getRandomFromArray([1, 2, 2, 3]);

    for (var i = 0; i < numSyllables; i++) {
      name +=
        getRandomConsanant() +
        getRandomVowel() +
        getRandomConsanant();
    }

    return toTitleCase(name);
  }

  function getFullName() {
    return toTitleCase(getName() + ' ' + getName());
  }

  return {
    getName: getName,
    getFullName: getFullName
  };
})();