 // Design Basic Game Solo Challenge-- CHRONO BOOTS

// This is a solo challenge

// ------------------------------------------------------

// *@*@*@*@*@* NOTE!! PLEASE SEE THE FINAL VERSION AT: *@*@*@*@*@*@*@*

// https://github.com/clairemation/clairemation.github.io/blob/master/projects/chronoboots/chronoboots.js
// and
// https://github.com/clairemation/clairemation.github.io/blob/master/projects/chronoboots/chronoboots.html

// or running live at:
// https://clairemation.github.io/projects/chronoboots/chronoboots.html

//  IT IS VERY DIFFERENT (and actually works)!

//  The game and my approach changed considerably as I was coding and learning, so at some point I started clean in another file. What is left in this file is an unholy mashup of a bunch of different versions in one file (even the pseudocode is at odds with itself). You could view this as the pseudocode and (nonfunctioning) initial solution, and the other files as the refactored version. (Though they could still stand to have a lot more refactoring done--redundancy reduced, etc.)

// Thanks.

//-----------------------------------------------------

// (This part is updated to reflect the final version.)

// Your mission description: Collect three crystals on a prehistoric lava field, but don't let the lava touch you!

// Overall mission: Help a stranded time traveler collect fuel crystals from era to era so they can return home.

// Goals: Acquire (walk onto) all three crystals on the map

// Characters: Hero

// Objects:
// hero (called 'ampersand' in the code, because I originally used '&' to represent her onscreen)
// crystals list object
// map object
// lava field object
// (On the html page: a display table, message boxes, buttons.)

// (Below here it's all a mix of different versions--originally you were picking up gears, not crystals, and bringing them to a base. The lava was a tar pit that didn't kill you but made you drop your gears.)

// Functions:
// map:
// -display
// -write to tile
// -read tile

// ampersand:
// -return current position
// -move
// -add item to inventory
// -lose item from inventory

// lava controller:
// -expand (turn random empty tile neighboring a lava tile into a lava tile)
// -contract (turn a random lava tile into an empty tile)
// -if Ampersand is on a lava tile, remove 1 item from her inventory, deposit it on random empty tile

// base camp:
// add item to inventory and check if goal reached


// Pseudocode
//
// general program flow:

// REPEAT {
//   status = turn()
//   IF status = gameOver, call gameOverHandler
//   IF status = win, call winHandler
// }

// function gameOverHandler {
//   print "Ouch! Boiled in lava! Game Over.\nYou collected x gears."
// }

// function winHandler {
//   print "Great job! You got all three gears! On to the next era!"
// }


// function turn() = {
//
//  drawScreen()
//
//  prompt command UNTIL you get a viable direction
//  REPEAT {
//   shift lava
//   move ampersand one tile in designated direction
//   sleep 0.2s
//   display map
//   IF this tile == any lava tile, return gameOver (end turn, lose)
//  } UNTIL this tile == any node tile
//
//  IF this tile == any fieldGear tile, add 1 to amp's inventory and remove gear from field

//  IF inventory == totalGears, return win

//  return continue (next turn, no win or lose)
// }


//  nodes = [[y,x], [y,x], [y,x]...] <--list of node points on map

//  fieldGears = [[y,x], [y,x], [y,x]] <-- coords of gears on the field

//  totalGears = 3

// baseMap = [
//        123456789ABCDEFGHIJKLMNOPQRST
//    1 ["   •---•---------•-----•     "]
//    2 ["   |   |         |     |     "]
//    3 ["•--•---•------•--•--•--•--•  "]
//    4 ["• |   |      |     |     |  "]
//    5 ["A••   |  •---•     •--•--•  "]
//    6 ["|      |  |            |     "]
//    7 ["•------•--•------------•-----"]
//  ]
//  top & left coords -- for reference only
//  A = base camp

//  liveMap = [
//        123456789ABCDEFGHIJKLMNOPQRST
//    1 ["   •---@---------•-----@     "]
//    2 ["   |   | ####    |     | ### "]
//    3 ["•--•---•--#---@--•--•--•-##  "]
//    4 ["|  |   |      | ##  |     |  "]
//    5 ["A&-•   |  •---•  #  •--•--•  "]
//    6 ["|      |  |   ####     |     "]
//    7 ["•------•--•------------•-----"]
//  ]
// (for instance)
// & = Dr. Ampersand
// @ = gear
// # = tar

//  function drawScreen: {
//  output "Inventory: x gears"
//  output EACH row of liveMap() as a string
//  }
//

// function liveMap() {
//   dupe baseMap -> displayMap
//   draw EACH lava tile to displayMap
//   draw EACH field gear to displayMap
//   draw Ampersand to displayMap
//   return displayMap
// }

// ampersand {

//   x = whatever
//   y = whatever
//   gears = 0
// }

// lavaController {

//   tiles = [[y,x], [y, x], [y, x]...]
//   borderTiles = ditto

//  function shift() {
//   3x expand() {
//      REPEAT {pop random tile from borderTiles array} UNTIL it's not a gear tile
//      push it to lava tiles array
//      for EACH neighboring tile to left, right, up, down
//        IF it's not a lava tile, add to borderTiles array
//   }

//   2x contract() {
//      pop random tile from tiles array
//      push it to borderTiles array
//      for EACH of its neighbors to left, right, up, down {
//        IF it is in borderTiles && NONE of it its neighbors are lava
//          {delete it from borderTiles}
//        }
//   }

// }



  // [
 //                  1         2
 //        01234567890123456789012345678
 //*0*/   "   •---@---------•-----@     ".split(""),
 // /*1*/ "   |   | ####    |     | ### ".split(""),
 // /*2*/ "•--•---•--#---@--•--•--•-##  ".split(""),
 // /*3*/ "|  |   |      | ##  |     |  ".split(""),
 // /*4*/ "•--•   |  •---•  #  •--•--•  ".split(""),
 // /*5*/ "|      |  |   ####     |     ".split(""),
 // /*6*/ "&------•--•------------•----•".split("")
 // ]

//

// INITIAL CODE==============================================

// environment variables------------------------------------------
var totalCrystals = 3;
var status = 'ok';

// map--------------------------------------------------

var map = {

  baseMap: [
   "   •---•---------•-----•     ".split(""),
   "   |   |         |     |     ".split(""),
   "•--•---•------•--•--•--•--•  ".split(""),
   "|  |   |      |     |     |  ".split(""),
   "•--•   |  •---•     •--•--•  ".split(""),
   "|      |  |            |     ".split(""),
   "•------•--•------------•----•".split("")
   ],

   displayMap: [
   "   •---•---------•-----•     ".split(""),
   "   |   |         |     |     ".split(""),
   "•--•---•------•--•--•--•--•  ".split(""),
   "|  |   |      |     |     |  ".split(""),
   "•--•   |  •---•     •--•--•  ".split(""),
   "|      |  |            |     ".split(""),
   "•------•--•------------•----•".split("")
   ],

}


// world objects----------------------------------------------

var ampersand = {
  image: '&',
  coords: {y: 6, x: 0}
}

var lava = {
  image: '#',
  coords: [
    {y: 1, x: 9},
    {y: 1, x: 10},
    {y: 1, x: 11},
    {y: 1, x: 12},
    {y: 1, x: 25},
    {y: 1, x: 26},
    {y: 1, x: 27},
    {y: 4, x: 16},
    {y: 4, x: 17},
    {y: 5, x: 17},
    {y: 6, x: 14},
    {y: 6, x: 15},
    {y: 6, x: 16},
    {y: 6, x: 17}
  ],
  shift: function() {
    //TODO -- expand and contract lava fields
  }
}

var crystals = {
  image: '◊',
  coords: [
    {y: 2, x: 17},
    {y: 0, x: 23},
    {y: 2, x: 4}
        ]
}

// functions---------------------------------------------------------------------

var updateDisplayMap = function() {

  //draw ampersand to display map
  map.displayMap[ampersand.coords.y][ampersand.coords.x] = ampersand.image;

  //draw lava tiles
  for (var i in lava.coords){
    y = lava.coords[i].y;
    x = lava.coords[i].x;
    map.displayMap[y][x] = lava.image;
  }

  //draw crystals
  for (var i in crystals.coords){
    y = crystals.coords[i].y;
    x = crystals.coords[i].x;
    map.displayMap[y][x] = crystals.image;
  }
}

//------------------------------------------

var drawScreen = function() {
  console.log("Collect " + totalCrystals + " crystals\n");
  for (var line in map.displayMap) {
    console.log(map.displayMap[line].join(""));
  }
}

//------------------------------------------

var gameOverHandler = function() {
  //TODO
}

//------------------------------------------

var winHandler = function() {
  //TODO
}

//------------------------------------------

var main = function(){
  while (true) {
    status = turn();
    if (status == 'lose') {gameOverHandler()}
    if (status == 'win') {winHandler()}
  }
}

//---------------------------------------------

var turn = function(){

  //prompt input until we get a viable direction
  var repeat = false;
  do {
    //prompt command -- placeholder value now
    direction = up;
  } while (repeat);

  //travel towards node
  do {

    lava.shift();

    switch (direction) {
      case 'up': ampersand.coords.y --;
      case 'down': ampersand.coords.y ++;
      case 'left': ampersand.coords.x --;
      case 'right': ampersand.coords.y ++;
    }

    //sleep

    //display map
    updateDisplayMap();
    drawScreen();

    //if you step in lava, return status = lose

  } while (map.baseMap[ampersand.y][ampersand.x] != '•'); // end travel

  //check tile for crystal

  //if remaining crystals = 0, return a win

  //else continue to the next turn
  return 'ok';

} //function turn


// function turn() = {
//
//  drawScreen()
//
//  prompt command UNTIL you get a viable direction
//  REPEAT {
//   shift lava
//   move ampersand one tile in designated direction
//   sleep 0.2s
//   display map
//   IF this tile == any lava tile, return gameOver (end turn, lose)
//  } UNTIL this tile == any node tile
//
//  IF this tile == any fieldGear tile, add 1 to amp's inventory and remove gear from field

//  IF inventory == totalGears, return win

//  return continue (next turn, no win or lose)
// }






// function drawScreen() {
//   console.log(\nCollected: " + ampersand.gears + " gears\n")
//   for (var i = 0; i < liveMap.length; i ++)
//     console.log(liveMap[i].join(""));
//   console.log("\n");
// }


// var ampersand = {
//   gears: 0,
//   y: 2,
//   x: 3,

//   move: function(direction) {

//     switch (direction) {

//       case 'left':
//         // liveMap[this.y][this.x] = baseMap[this.y][this.x]; //erase old spot
//         // var newX = this.x; //set new working X position
//         do {
//           newX --
//         } while ((baseMap[this.y][newX] != '•') && (baseMap[this.y][newX] != '@') && (baseMap[this.y][newX] != '#')); //move working position left until node
//         this.x = newX; //set official X to working X
//         // liveMap[this.y][this.x] = '&'; //draw new position
//         break;

//       case 'right':
//         liveMap[this.y][this.x] = baseMap[this.y][this.x];
//         var newX = this.x;
//         do {
//           newX ++;
//         } while ((baseMap[this.y][newX] != '•') && (baseMap[this.y][newX] != '@') && (baseMap[this.y][newX] != '#'));
//         this.x = newX;
//         liveMap[this.y][this.x] = '&';
//         break;

//       case 'up':
//         liveMap[this.y][this.x] = baseMap[this.y][this.x];
//         var newY = this.y;
//         do {
//           newY --;
//         } while ((baseMap[newY][this.x] != '•') && (baseMap[newY][this.x] != '@') && (baseMap[newY][this.x] != '#'));
//         this.y = newY;
//         liveMap[this.y][this.x] = '&';
//         break;

//       case 'down':
//         liveMap[this.y][this.x] = baseMap[this.y][this.x];
//         var newY = this.y;
//         do {
//           newY ++;
//         } while ((baseMap[newY][this.x] != '•') && (baseMap[newY][this.x] != '@') && (baseMap[newY][this.x] != '#'));
//         this.y = newY;
//         liveMap[this.y][this.x] = '&';
//         break;

//     } //switch (direction)

//   } //move function

// } //ampersand object


// var tarpit = {

//   tarTiles: [
//     [1,9],
//     [1,10],
//     [1,11],
//     [1,12],

//     [1,25],
//     [1,26],
//     [1,27],

//     [2,0],

//     [2,5],
//     [2,6],

//     [3,6],
//     [3,7],
//     [4,7],
//     [5,4],
//     [5,5],
//     [5,6],
//     [5,7]
//   ],

//   contains: function(character){
//     var charPosition = [character.y, character.x];
//     for (var i = 0; i < this.tarTiles.length; i++) {
//       if (charPosition == this.tarTiles[i]) {
//         return true;
//       }
//     }
//     return false;
//   },//contains function

//   washAway: function(gear){
//     ampersand.gears --;
//     liveMap[gear.y][gear.x] = '@';
//   },//washAway function

//   expand: function() {
//     //to do
//   },//expand function


// }//tarpit object


// // MAIN PROGRAM---------------------------------------

// do {

// drawScreen();


// // prompt("Enter a move");



// gameOver = true;

// } while ((!gameOver) && (!win));




// TEST CODE------------------------------------
// drawScreen();
// amp.move('up');
// drawScreen();


// Refactored Code-------------------

// See at https://github.com/clairemation/clairemation.github.io/blob/master/projects/chronoboots/chronoboots.js
// and
// https://github.com/clairemation/clairemation.github.io/blob/master/projects/chronoboots/chronoboots.html

// or running live at:
// https://clairemation.github.io/projects/chronoboots/chronoboots.html


// Reflection-------------------------
//

// -What was the most difficult part of this challenge?
// Maybe not falling down the rabbit hole!

// -What did you learn about creating objects and functions that interact with one another?
// Once I got into integrating the script into html objects, it's like a light came on. I'd been working hard trying to manage the game "clock"/cycles/ticks/whatever you want to call it, but when it was running on the page I could have the character and lava refreshing asynchronously and it was all both simpler and easier to pull off than I anticipated. I have some experience programming, but I've never been able to make something like this, let alone so relatively simply.

// -Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?
// Did I! Once I got into using it with html and css, everything was new. Though the whole approach reminded me of HyperCard, this old visual object-scripting language for the Mac that was around when I was a kid, and I only ever played around with a little bit. It was really interesting to read in the (fellow DBC-er's) blog linked on the assignment page that JavaScript in fact derive from HyperCard!

// -How can you access and manipulate properties of objects?
// So far we haven't learned about any way to keep object properties private, so to access one from outside you can simply reference it using either of these notations:
// object.propery or object[property]
// and compare or assign as you would with any variable.
// The bracket notation evaluates the phrase inside the brackets first, so you can use a variable there to access varying properties depending on the program state.
