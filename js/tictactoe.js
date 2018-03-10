$(document).ready( function () {

let outcome = ["_", "_", "_",
               "_", "_", "_",
               "_", "_", "_", ]; // Empty array to store moves later


// We want a function that loops through the outcome array, telling us where all the X's are
let checkForXWin = function () {
  let indices = [];
  let index;

  for (let i = 0; i < outcome.length; i++) {
    outcome.filter (function (outcome, index) { // This retrieves the index of every occurrence of "X"
     if (outcome == "X") {
       indices.push(index);
     }
  });
//  console.log(indices.toString());

//  if (indices.toString() === one of the indices of winningcombo.toString) we have a win
//we need another loop, just not sure if it goes here 

    return;

  }
}




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
]

 //run something that checks for a win after the third turn (last two if statements)
 // how would you compare outcome array with winningCombo array? i.e. if outcome[]

$('.square').on('click', function () {

  if (turns === 9) {
    return;
  }

  if (turns === 9) {
    return;
  }

  if (turns === 0) {// If it's the first move of player 1
    outcome[+this.id] = "X";
    turns = turns + 1;   // number of turns needs to count up each time
    // console.log(this.id);

    $(this).find('img').css('visibility', 'visible');
    $(this).find('img').attr('src', './css/images/donutpug.png');
    console.log(turns);
    console.log(outcome);
    return turns;
  }

  if (turns === 1) {
    outcome[+this.id] = "O";
    turns = turns + 1;

    $(this).find('img').css('visibility', 'visible');
    $(this).find('img').attr('src', './css/images/unipug.png');
    console.log(turns);
    console.log(outcome);
    return turns;
  }

  if (turns !== 0 && turns % 2 === 0) {
    outcome[+this.id] = "X";
    turns = turns + 1;
    console.log(turns);
    console.log(outcome);

    $(this).find('img').css('visibility', 'visible');
    $(this).find('img').attr('src', './css/images/donutpug.png');

    checkForXWin();

    return turns;
  }

  if (turns !== 0 && turns % 2 !== 0) {
    outcome[+this.id] = "O";
    turns = turns + 1;
    console.log(turns);
    console.log(outcome);

    $(this).find('img').css('visibility', 'visible');
    $(this).find('img').attr('src', './css/images/unipug.png');

//    checkForOWin();

    return turns;
    }

});




$('h1').funText((40, ['#7dbcdb', '#edd07b', '#ba5b62']));

}); // DOM readiness


// TODO: prevent player from clicking a square that's already taken (check if img already has a pug src)
// TODO: Make hover for h1 tag - from toe to pug
// TODO: Marquee success message or pug gif
// TODO: sound of barking
// TODO: add alt text e.g. alt="Pug in a donut costume"

//6h as of 11.30 saturday
