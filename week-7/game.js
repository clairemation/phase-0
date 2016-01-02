 // Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description: Collect 3 fallen gears and bring them back to base camp in an area full of shifting lava. If you step into a tar pit and you're holding a gear, the gear will be swept away to another position on the map. If you step into one and you're holding more than one gear, you're too heavy to escape and will sink to your doom.

// Overall mission: On the first test flight of your new time machine, you arrive in a prehistoric era only to find that many pieces have dropped off in flight and the machine is now inoperable. You must now recover the lost pieces, era by era, to make your way home.

// Goals: Add 3 gears to base camp inventory

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


//

// Initial Code------------------------------------------

var baseMap = [
   "   •---•---------•-----•     ".split(""),
   "   |   |         |     |     ".split(""),
   "•--•---•------•--•--•--•--•  ".split(""),
   "•  |   |      |     |     |  ".split(""),
   "A•-•   |  •---•     •--•--•  ".split(""),
   "•      |  |            |     ".split(""),
   "•------•--•------------•----•".split("")
   ]

 var liveMap = [
 //           1         2
 //     01234567890123456789012345678
 /*0*/ "   •---@---------•-----@     ".split(""),
 /*1*/ "   |   | ####    |     | ### ".split(""),
 /*2*/ "•--&---•--#---@--•--•--•-##  ".split(""),
 /*3*/ "|  |   |      | ##  |     |  ".split(""),
 /*4*/ "A--•   |  •---•  #  •--•--•  ".split(""),
 /*5*/ "|      |  |   ####     |     ".split(""),
 /*6*/ "•------•--•------------•----•".split("")
 ]

var gameOver = false;
var win = false;
var message = "";
var gear1 = { y:0, x:7};
var gear2 = { y:2, x:4};
var gear3 = { y:0, x:23};

function drawScreen() {
  console.log("\n" + message + "\nCollected: 0 gears\nInventory: " + ampersand.gears + " gears\n")
  for (var i = 0; i < liveMap.length; i ++)
    console.log(liveMap[i].join(""));
  console.log("\n");
}


var ampersand = {
  gears: 0,
  y: 2,
  x: 3,

  move: function(direction) {

    switch (direction) {

      case 'left':
        // liveMap[this.y][this.x] = baseMap[this.y][this.x]; //erase old spot
        // var newX = this.x; //set new working X position
        do {
          newX --
        } while ((baseMap[this.y][newX] != '•') && (baseMap[this.y][newX] != '@') && (baseMap[this.y][newX] != '#')); //move working position left until node
        this.x = newX; //set official X to working X
        // liveMap[this.y][this.x] = '&'; //draw new position
        break;

      case 'right':
        liveMap[this.y][this.x] = baseMap[this.y][this.x];
        var newX = this.x;
        do {
          newX ++;
        } while ((baseMap[this.y][newX] != '•') && (baseMap[this.y][newX] != '@') && (baseMap[this.y][newX] != '#'));
        this.x = newX;
        liveMap[this.y][this.x] = '&';
        break;

      case 'up':
        liveMap[this.y][this.x] = baseMap[this.y][this.x];
        var newY = this.y;
        do {
          newY --;
        } while ((baseMap[newY][this.x] != '•') && (baseMap[newY][this.x] != '@') && (baseMap[newY][this.x] != '#'));
        this.y = newY;
        liveMap[this.y][this.x] = '&';
        break;

      case 'down':
        liveMap[this.y][this.x] = baseMap[this.y][this.x];
        var newY = this.y;
        do {
          newY ++;
        } while ((baseMap[newY][this.x] != '•') && (baseMap[newY][this.x] != '@') && (baseMap[newY][this.x] != '#'));
        this.y = newY;
        liveMap[this.y][this.x] = '&';
        break;

    } //switch (direction)

  } //move function

} //ampersand object


var tarpit = {

  tarTiles: [
    [1,9],
    [1,10],
    [1,11],
    [1,12],

    [1,25],
    [1,26],
    [1,27],

    [2,0],

    [2,5],
    [2,6],

    [3,6],
    [3,7],
    [4,7],
    [5,4],
    [5,5],
    [5,6],
    [5,7]
  ],

  contains: function(character){
    var charPosition = [character.y, character.x];
    for (var i = 0; i < this.tarTiles.length; i++) {
      if (charPosition == this.tarTiles[i]) {
        return true;
      }
    }
    return false;
  },//contains function

  washAway: function(gear){
    ampersand.gears --;
    liveMap[gear.y][gear.x] = '@';
  },//washAway function

  expand: function() {
    //to do
  },//expand function


}//tarpit object


// MAIN PROGRAM---------------------------------------

do {

drawScreen();


// prompt("Enter a move");



gameOver = true;

} while ((!gameOver) && (!win));




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
