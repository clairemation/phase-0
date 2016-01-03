// environment variables------------------------------------------
var totalCrystals = 3;
var status = 'ok';
var moving = false;

// map--------------------------------------------------

var map = {

  baseMap: [
    "                              ".split(""),
    "  •••••••••••••••••••••••••   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •••••••••••••••••••••••••   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •••••••••••••••••••••••••   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •••••••••••••••••••••••••   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •     •     •     •     •   ".split(""),
    "  •••••••••••••••••••••••••   ".split(""),
  ],

}


var createHtmlMap = function() {

  //make table
  var table = document.createElement("TABLE");
  table.setAttribute("id", "field");
  document.body.appendChild(table);

  //make rows
  for (var i = 0; i < 15; i++) {
    var row = document.createElement("TR");
    document.getElementById("field").appendChild(row);

    //make cells inside each row
    for (var j = 0; j < 29; j++) {
      var cell = document.createElement("TD");
      document.getElementById("field").rows[i].appendChild(cell);
    }
  }

  //designate paths: rows
  for (i = 1; i < 14; i += 3) {
    for (j = 2; j < 27; j++) {
      document.getElementById("field").rows[i].cells[j].setAttribute ("class", "path");
    }
  }

  //designate paths: cols
  for (var col = 2; col < 27; col += 3) {
    for (var row = 2; row < 14; row++) {
      document.getElementById("field").rows[row].cells[col].setAttribute ("class", "path");
    }
  }

} //end createHtmlMap


  // world objects----------------------------------------------

  var ampersand = {
    image: '&',
    y: 13,
    x: 2
  }

  var lava = {
    image: '#',
    currentFrame: 0,
    frames: [
      [ //frame0start
       "                              ".split(""),
       "        # #         # #       ".split(""),
       "        # #         # #   #   ".split(""),
       "    # #       # #             ".split(""),
       "      #       # #             ".split(""),
       "                              ".split(""),
       "    #   # # #           # #   ".split(""),
       "        # # #                 ".split(""),
       "        # # #     # #         ".split(""),
       "                  #           ".split(""),
       "                              ".split(""),
       "      #                 #     ".split(""),
       "            # # #       # #   ".split(""),
       "                          #   ".split(""),
       ],//frame0end

       [ //frame1start
       "                              ".split(""),
       "          # #       # #       ".split(""),
       "    # #   # #       # #   #   ".split(""),
       "      #     #   #             ".split(""),
       "              # # #           ".split(""),
       "    #         # #       # #   ".split(""),
       "  # #     #             # #   ".split(""),
       "        #       # #           ".split(""),
       "      # # #     # #           ".split(""),
       "      # #         #           ".split(""),
       "                              ".split(""),
       "      #                       ".split(""),
       "            # # # #       #   ".split(""),
       "                        # #   ".split(""),
       ],//frame1end

       [ //frame2start
       "                              ".split(""),
       "      #     # #     # #   #   ".split(""),
       "  # # #     # #     # #   #   ".split(""),
       "                #             ".split(""),
       "    #           # #       #   ".split(""),
       "    #     #   # #       # #   ".split(""),
       "    #     # #           #     ".split(""),
       "        #         # #         ".split(""),
       "        #         #           ".split(""),
       "      # #                     ".split(""),
       "      # #                     ".split(""),
       "      #                   #   ".split(""),
       "      #       # #       # #   ".split(""),
       "              # #       # #   ".split(""),
       ],//frame2end
    ],

    drawLava: function() {
      frameToDraw = this.frames[this.currentFrame];
      for (var y = 0; y < frameToDraw.length; y++) {
        for (var x = 0; x < frameToDraw[y].length; x++) {
          if (frameToDraw[y][x] == "#") {
            document.getElementById("field").rows[y].cells[x].innerHTML = "<div class='flame'> </div>";
          }
        }
      }
    },
  } //end lava

  var crystals = {
    image: 'O',
    coords: [
      {y: 1, x: 17},
      {y: 1, x: 23},
      {y: 4, x: 4}
          ]
  }


  // functions---------------------------------------------------------------------

  var placeObjects = function() {

    //first clear the field
    var allCells = document.getElementsByTagName("TD");
    for (var i = 0; i < allCells.length; i++) {
      allCells[i].innerHTML = " ";
    }

    //place ampersand
    document.getElementById("field").rows[ampersand.y].cells[ampersand.x].innerHTML = ("<div id='hero'>" + ampersand.image + "</div>");

    //place lava
    lava.drawLava();

    //place crystals
    for (var i in crystals.coords){
      y = crystals.coords[i].y;
      x = crystals.coords[i].x;
      document.getElementById("field").rows[y].cells[x].innerHTML = "<div class = 'crystal'>" + crystals.image + "</div>";
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

//button handlers

var press = function(direction) {

    lava.currentFrame = { 0: 1, 1: 2, 2: 0 }[lava.currentFrame]; //cycle lava frames

    if (direction == 'up') {
      if (document.getElementById("field").rows[ampersand.y - 1].cells[ampersand.x].className == "path") {
        ampersand.y --;
      }
    }
    else if (direction == 'down') {
      if (document.getElementById("field").rows[ampersand.y + 1].cells[ampersand.x].className == "path") {
        ampersand.y ++;
      }
    }
    else if (direction == 'left') {
      if (document.getElementById("field").rows[ampersand.y].cells[ampersand.x - 1].className == "path") {
        ampersand.x --;
      }
    }
    else if (direction == 'right') {
      if (document.getElementById("field").rows[ampersand.y].cells[ampersand.x + 1].className == "path") {
        ampersand.x ++;
      }
    }

    placeObjects();

} //function main


var unpress = function() {
  direction = null;
}