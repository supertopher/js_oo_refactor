$(document).ready(function() {


  var addDice = function() {
    $('.dice').append('<div class="die">0</div>');
  };

  var getRandomNumber = function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    }

  var rollDice = function() {
    $('.die').each(getRandomNumber);
  };

  $('#roller button.add').on('click', addDice);

  $('#roller button.roll').on('click', rollDice);
});
