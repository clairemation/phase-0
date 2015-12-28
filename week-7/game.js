 // Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description: Collect 3 fallen gears and bring them back to base camp in an area full of shifting tar pits. If you step into a tar pit and you're holding a gear, the gear will be swept away to another position on the map. If you step into one and you're holding more than one gear, you're too heavy to escape and will sink to your doom.

// Overall mission: On the first test flight of your new time machine, you arrive in a prehistoric era only to find that many pieces have dropped off in flight and the machine is now inoperable. You must now recover the lost pieces, era by era, to make your way home.

// Goals: Add 3 gears to base camp inventory

// Characters: Dr. Ampersand the scientist (you)

// Objects: 1 map, 3 gears, 1 base camp, 1 tar pit controller object

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

// tar pit controller:
// -expand (turn random empty tile neighboring a tarpit tile into a tarpit tile)
// -contract (turn a random tarpit tile into an empty tile)
// -if Ampersand is on a tarpit tile, remove 1 item from her inventory, deposit it on random empty tile

// base camp:
// add item to inventory and check if goal reached


// Pseudocode
//
// general program flow:

// until goal reached or game over: {
// display map
// prompt user movement (up down left right)
// IF gear there, add to inventory & update position
// ELSE IF base camp there, remove gears from inventory, add gears to base camp inventory, don't update position
// ELSE just update position
// tarpitController checks, execution -- break if game over
// update map
// }
// p "You win!"

//
// baseMap = [
//        123456789ABCDEFGHIJKLMNOPQRST
//    1 ["   •---•---------•-----•     "]
//    2 ["   |   |         |     |     "]
//    3 ["•--•---•------•--•--•--•--•  "]
//    4 ["|  |   |      |     |     |  "]
//    5 ["A--•   |  •---•     •--•--•  "]
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
//  output "Inventory: x gears \n"
//  output EACH row of liveMap
//  }
//

// ampersand {

//   posX = whatever
//   posY = whatever

//   gears = 0
//   max_gears = 2

//   move(direction) {
//   erase old position, move to next node, write to new position:
//     write baseMap(posY, posX) to liveMap(posY, posX)
//     case direction
//       IF L
//          UNTIL baseMap at newPosition = node
//            sleep .2s
//            posX --
//            write "&" to liveMap at new posY, posX
//            drawScreen
//       if R, " posX ++
//       if U, " posY --
//       if D, " posY ++
//   }
// }

// tarpitController {

//   tarpitTiles = [[y,x], [y, x], [y, x]...]

//   check() {
//    check if ampersand is in tarpit:
//    IF ampersand's location is included in tarpitTiles
//      IF ampersand.gears >= 2 { game over! }
//      IF ampersand.gears == 1 {
//        ampersand.gears = 0
//        random newPosition on path or node ( newPosition = random, repeat until baseMap at that position contains "•" "|" or "-")
//        write to liveMap at newPosition, "@")
//       }
//    }

//   expand() {
//     do 3 times:
//       lookup random spot on map until (spot is blank or "&") && (position to L, R, U, or D of spot is tarpit tile)
//       add spot to tarpitTiles
//       write "#" to spot on map
//   }

//   contract() {
//     do 2 times:
//       select random element of tarpitTiles
//       write " " to map position
//       delete element
//   }

// }


//

// Initial Code------------------------------------------

var baseMap = [
   "   •---•---------•-----•     ".split(""),
   "   |   |         |     |     ".split(""),
   "•--•---•------•--•--•--•--•  ".split(""),
   "|  |   |      |     |     |  ".split(""),
   "A--•   |  •---•     •--•--•  ".split(""),
   "|      |  |            |     ".split(""),
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

var status = "";

function drawScreen() {
  console.log("\n" + status + "\nCollected: 0 gears\nInventory: " + amp.gears + " gears\n")
  for (var i = 0; i < liveMap.length; i ++)
    console.log(liveMap[i].join(""));
  console.log("\n");
}


var amp = {
  gears: 0,
  maxGears: 2,
  y: 2,
  x: 3,

  move: function(direction) {

    switch (direction) {

      case 'left':
        liveMap[this.y][this.x] = baseMap[this.y][this.x]; //erase old spot
        var newX = this.x; //set working X position
        do {
          newX --
        } while ((baseMap[this.y][newX] != '•') && (baseMap[this.y][newX] != '@') && (baseMap[this.y][newX] != '#')); //move left until node
        this.x = newX; //set official X to working X
        liveMap[this.y][this.x] = '&'; //draw new position
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

    } //switch
  } //move function

} //amp


var tarpitController = {

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

  checkChar: function(character){
    charPosition = [character.x, character.y];
    charInTarpit = false;
    for (var i = 0; i < tarTiles.length; i++) {
      if (charPosition = tarTiles[i]) {
        charInTarpit = true;
        break;
      }//if
    }//for

    if (charInTarpit) {

      if (character.gears >= 2) {
        gameOver = true;
        return;
      }//if gears >=2

      if (character.gears == 1) {
        character.gears = 0; //lose gear

        //pick a random spot on a path
        var r = new Random();
        do {
          var yRand = r.nextInt(6 - 0 + 1) + 0; //random y
          var xRand = r.nextInt(28 - 0 + 1) + 0; //random x
        } while ((liveMap[yRand][xRand] != '-') && (liveMap[yRand][xRand] != '•') && (liveMap[yRand][xRand] != '|') && (liveMap[yRand][xRand] != '#')); //repeat until random coords are on a path tile

        liveMap[yRand][xRand] = '@'; //put the gear there
        status = "Lost a gear!";

      }//if gears == 1

    }//if charInTarpit

  },//checkChar

} //tarpitController


// MAIN PROGRAM---------------------------------------

do {

drawScreen();

console.log("Enter a move");



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
