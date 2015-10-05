var Adventurer = (function() {

  var availableItems = ['sword', 'club', 'dagger', 'axe', 'bow'];
  var availableProfessions = ['warrior', 'rogue', 'wizard', 'cleric'];

  var AdventurerPerson = function() {
    this.name = NameGenerator.getFullName();
    this.item = Random.getRandomFromArray(availableItems);
    this.profession = Random.getRandomFromArray(availableProfessions);

    function getName() {
      return this.name;
    }

    function getItem() {
      return this.item;
    }

    function getProfession() {
      return this.profession;
    }

    function toString() {
      return this.name + ' { ' + this.item + ', ' + this.profession + ' }';
    }

    this.toString = toString;
    this.getName = getName;
    this.getItem = getItem;
    this.getProfession = getProfession;
  };

  function getRandomAdventurer() {
    return new AdventurerPerson();
  }

  return {
    getRandomAdventurer: getRandomAdventurer
  };
})();