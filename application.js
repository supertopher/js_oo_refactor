$(function() {
  var die = Die();
  die.init();
});

var Die = function(){
  var self = {
    addSelector: '#roller button.add',
    rollSelector: '#roller button.roll',
    diceSelector: '.dice',
    dieHtml: '<div class="die">0</div>',
    dieSelector: '.die'
  };

  self.init = function(){
    $(self.addSelector).on('click',function(event){
      addDie(event);
    });

    $(self.rollSelector).on('click', function(event){
      rollDie(event);
    })
  };


  rollDie = function(){
    $(self.dieSelector).each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  };

  addDie = function(){
    $(self.diceSelector).append(self.dieHtml);
  };

  return self;

};
