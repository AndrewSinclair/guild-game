$(document).ready(function() {
  var Game = (function() {
    var view = View.init()
      , hero1 = Adventurer.getRandomAdventurer()
      , hero2 = Adventurer.getRandomAdventurer();

    view.setOutput(hero1.toString() + '\n' + hero2.toString());
  })();
});