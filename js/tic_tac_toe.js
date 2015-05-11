$(document).ready(function() {

  var turnCount = 0;

  $('.box_cell').on("click", function(event){
    if(turnCount % 2 === 0) {
      $(event.currentTarget).text("x");
    }
    else {
      $(event.currentTarget).text("o")
    }

    turnCount++;
  });

});

