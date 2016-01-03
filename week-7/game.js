 // Design Basic Game Solo Challenge-- TIMECYCLE

// This is a solo challenge

// Your mission description: Collect three crystals on a shifting lava field--but don't let the lava touch you!

// Overall mission:

// It will only lead to catastrophe, Brackett says. Sweet boy, that young postdoc, and nice butt, but not too bright. You know what you're doing--you're Dr. Ampersand, preeminent (and only) chronolocomotive systems engineer. And your timecycle, complete at last, is a work of beauty and genius. You rev it up--eons blow past you. The building of the pyramids. Early man. The dinosaurs. Explosion.

// Wait, explosio--

// You regain consciousness under your timecycle, on a lava field, the timecycle's fuel chamber blown wide open. You're in the early Precambrian Eon. And the trilithium crystals that fuelled your timecycle are scattered across the ages.

// Well, this might be a catastrophe for an ORDINARY scientist, but for Dr. Ampersand, preeminent chronolocomotive systems engineer, it's just a bad day. Three trilithium crystals landed with you in the Precambrian. If you can recover them, that's all the fuel you need to go find the next bunch in the Triassic Period, which will get you to the next bunch in the Cretacious, and so on. You're going to make it home. You can't wait to see Brackett's adorably wrong face. Maybe over drinks.

// Just... what DID cause your tike's accident? And why is history getting increasingly... different?


// Goals: Get gear count to 3

// Characters: Dr. Ampersand the scientist (you)

// Objects: 1 map, 3 gears, 1 base camp, 1 lava controller object

// Functions:

// map:
// -display
// -write to tile
// -read tile

// Dr. Ampersand:
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


// Refactored Code






// Reflection
//
//
//
//
//
//
//
