$(document).ready( function () {

  $('.square').addClass('animated flipInY');

  setTimeout( function () {
    $('.square').removeClass('animated flipInY');
  }, 900);


  let outcome = ["_", "_", "_",
                 "_", "_", "_",
                 "_", "_", "_", ];

  let gameWon = false;

  let turns = 0;

  let winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
  ];

  // Loop through the outcome array, telling us where all the X's are
  let checkForXWin = function () {
    let indicesX = [];

    for (let i = 0; i < outcome.length; i++) {
      outcome.filter (function (outcome, index) { // This retrieves the index of every occurrence of "X"
        if (outcome == "X") {
          indicesX.push(index);
        }
      });

      for (let j = 0; j < winningCombo.length; j++) {
        // We can't compare indicesX and outcome arrays directly because it's possible not to win in 3 moves e.g. [0,4,6,8] is never going to equal [0,4,8]. Instead, look for each element of a winningCombo in the indicesX array. If every element is present, X has won.
        if (indicesX.indexOf(winningCombo[j][0]) > -1
        && indicesX.indexOf(winningCombo[j][1]) > -1
        && indicesX.indexOf(winningCombo[j][2]) > -1) {
          gameWon = true;

          if (gameWon === true) {

            let imageURL = "./css/images/donutpug.png";

            swal({  // To display success message
              title: "You won!",
              text: "Donuts are awesome.",
              icon: imageURL,
              buttons: { cancel: "Aw yisss!", reset: { text: "Play again",}},
            });

            $('.swal-button--reset').on('click', function () { // Reload page if "Play again" button clicked
              location.reload(true);
            });

          }
          return;
        }
      }
    }
    return;
  };

  let checkForOWin = function () {
    let indicesO = [];

    for (let i = 0; i < outcome.length; i++) {
      outcome.filter (function (outcome, index) {
        if (outcome == "O") {
          indicesO.push(index);
        }
      });

      for (let j = 0; j < winningCombo.length; j++) {
        if (indicesO.indexOf(winningCombo[j][0]) > -1
        && indicesO.indexOf(winningCombo[j][1]) > -1
        && indicesO.indexOf(winningCombo[j][2]) > -1) {
          gameWon = true;

          if (gameWon === true) {

            imageURL = "./css/images/unipug.png";

            swal({
              title: "You won!",
              text: "Of course you did. You're a unicorn.",
              icon: imageURL,
              buttons: { cancel: "Woohoo!", reset: { text: "Play again",}},
            });

            $('.swal-button--reset').on('click', function () {
              location.reload(true);
            });

          }
          return;
        }
      }
    }
    return;
  };



  $('.square').on('click', function () {

    $(this).addClass('noHover');

    if (turns === 9) {
      return;
    }

    if (gameWon) {
      return;
    }

    if (turns === 8) { // Automatically a draw if it's turn 8 and the game hasn't been won yet
      $(this).addClass('animated flipInY');
      imageURL = "./css/images/draw.png";

      swal({
        title: "It's a draw.",
        text: "Everyone's happy!",
        icon: imageURL,
        buttons: { cancel: "I love pugs", reset: { text: "Play again",}},
      });

      $('.swal-button--reset').on('click', function () { // Reload page if "Play again" button clicked
        location.reload(true);
      });
    }

    if ($(this).find('img').attr('src') === './css/images/donutpug.png') { // Prevent changing existing move
      return;
    }

    if ($(this).find('img').attr('src') === './css/images/unipug.png') {
      return;
    }

    if (turns === 0) {
      outcome[+this.id] = "X";
      turns = turns + 1;

      $(this).find('img').css('visibility', 'visible');
      $(this).find('img').attr( {src: './css/images/donutpug.png', alt: 'Pug in a donut costume' } );
      $(this).addClass('animated flipInY');
      return turns;
    }

    if (turns === 1) {
      outcome[+this.id] = "O";
      turns = turns + 1;

      $(this).find('img').css('visibility', 'visible');
      $(this).find('img').attr( {src: './css/images/unipug.png', alt: 'Pug in a unicorn costume' } );
      $(this).addClass('animated flipInY');    return turns;
    }

    if (turns !== 0 && turns % 2 === 0) {
      outcome[+this.id] = "X";
      turns = turns + 1;

      $(this).find('img').css('visibility', 'visible');
      $(this).find('img').attr( {src: './css/images/donutpug.png', alt: 'Pug in a donut costume' } );
      $(this).addClass('animated flipInY');

      checkForXWin();

      return turns;
    }

    if (turns !== 0 && turns % 2 !== 0) {
      outcome[+this.id] = "O";
      turns = turns + 1;

      $(this).find('img').css('visibility', 'visible');
      $(this).find('img').attr( {src: './css/images/unipug.png', alt: 'Pug in a unicorn costume' } );
      $(this).addClass('animated flipInY');

      checkForOWin();

      return turns;
    }

  });


  $('h1').funText((40, ['#7dbcdb', '#edd07b', '#ba5b62']));


  $('span').mouseover(function() {
    if ($('span').text() === 'Pug') {
      return;
    }

    $('span').animate({'opacity': 0}, 300, function () {  // To ease in and out of text replacement
      $('span').text('Pug');
    }).animate({'opacity': 1}, 300);
  });

});
