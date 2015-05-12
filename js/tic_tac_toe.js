$(document).ready(function() {
  // 1. Set Turn Count To Zero
  // declare a variable turnCount and assign it
  // the value of zero so the game starts
  // at an even number
  var winnerIs = false;
  var turnCount = 0;
  // 2. Set Board Value's To Null
  // declare a variable board, to set my board to a 3 tiered,    // nested array and set the value of each element to null
  var board = [[null, null, null],
               [null, null, null],
               [null, null, null]];

  // 3.
  // function that executes for the <td> with the classs
  // .box_cell that is clicked on
  $('.box_cell').on("click", function(event){
    // 4. Set Variables to access the data within each box's data
    // attributes
    // the first two varialbes: rowIndexStr & colIndexStr return
    // the value of the clicked on box's data attributes in a
    // string
    // * it's important to note that the data attributes
    // of each box is analogous to what their individual
    // index would be in a 3 tiered nested array
    // this way, if we then return the two strings
    // as integers — we get the index value of that
    // box in our array 'board'
    var rowIndexStr = this.dataset.row;
    var colIndexStr = this.dataset.col;
    // Indexes MUST be integer/numbers
    // these two variables convert the initial strings that were
    // returned, into integers (because index values have to be
    // integers aka numbers)
    var rowIndex = parseInt(rowIndexStr);
    var columnIndex = parseInt(colIndexStr);
    // 5. Now That Our Selected Box's Index Value Is Known
    // we can start to execute our if statements for x & o
    // 5a. declare the first "if" statement to execute when
    // the value of turnCount even (perfectly divisible by 2)
    if(turnCount % 2 === 0 && ($(this).text() === "" && winnerIs === false)) {
      // and when turnCount is even,
      // the text 'x' is pushed to the current event's(the clicked box) html element
      $(event.currentTarget).text("x");
      // FINALLY, we execute another piece of code
      // that accesses the array board by the index values of
      // the current even that we already figured out
      // before this point, and replaces that element's
      // index value of 'null', with 'x'
      // 0_0, 0_1, ... 2_2
      // given 2_1 it will give you an array [2, 1]
      board[rowIndex][columnIndex] = 'x';
      checkForWinner();
      // once 'x' is taken care of (or rather the first move)
      // we just include and 'else' statment
      // to account for odd moves and therefore 'o'
      turnCount++;
    } else if (turnCount % 2 !== 0 && ($(this).text() === "" && winnerIs === false)) {
      $(event.currentTarget).text("o");
      board[rowIndex][columnIndex] = 'o';
      checkForWinner();
      turnCount++;

    }
    // as a default, turnCount increases +1 each time a box
    // is clicked, so the game switches between
    // 'x' & 'o' for every even and odd turn
  });

  var checkForWinnerX = function() {
    if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x' ||
        board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' ||
        board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x' ||
        board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x' ||
        board[0][1] === 'x' && board[1][1] === 'x' && board[1][2] === 'x' ||
        board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x' ||
        board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x' ||
        board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
        console.log("winner is X!");
        return true;
    }
  };

  var checkForWinnerO = function() {
     if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o' ||
         board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o' ||
         board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o' ||
         board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o' ||
         board[0][1] === 'o' && board[1][1] === 'o' && board[1][2] === 'o' ||
         board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o' ||
         board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o' ||
         board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
         console.log("winner is O!");
         return true;
   }
  };

  function checkForWinner() {
    if (checkForWinnerX() === true) {
      $(".box_cell").empty();
      alert("winner is X!");
      return true;

    }
    else if (checkForWinnerO() === true) {
      $(".box_cell").empty();
      alert("winner is O!");
      return true;
    }
    else {
      console.log(turnCount);
      return false;
    }
  };
});


