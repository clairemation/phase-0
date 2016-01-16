// Associated files: review.html, review.css

// User stories
// I want a grocery list app where I can add an an item and its quantity, delete items, edit quantities, check items off, and reorder items. Then I can generate a nicely formatted list to print out.

// Pseudocode

// add an item:
// on + button click
//   create new tr called newRow
//   create new td called name
//   name's text = #name's value
//   append as child to newRow
//   create new element td called qty
//   qty's text = #qty's value
//   append as child to newRow
//   create new element button called deleteButton
//   deleteButton's text = (delete symbol)
//   append as child to newRow
//   append newRow as child to list table

// delete an item:
// on delete button click
//   delete button's parent node

// adjust quantity
//   taken care of--shown in editable number field

// Initial solution---------------------------------------------

// function addItem() {

//   var newRow = document.createElement("tr");

//   // row will look like this:
//   // up/down button | item name | item qty | check-off button | delete button

//   //the move up/down button
//   var moveCell = document.createElement("td");
//   moveCell.innerHTML = '<a onclick="moveRow(this.parentNode.parentNode, -1);">&#9650;</a><br><a onclick="moveRow(this.parentNode.parentNode, 1);">&#9660;</a>';
//   newRow.appendChild(moveCell);

//   //item name
//   var name = document.createElement("td");
//   name.setAttribute("class", "name");
//   name.innerText = document.getElementById("itemName").value;
//   newRow.appendChild(name);

//   //item quantity
//   var qty = document.createElement("td");
//   var qtyField = document.createElement("input");
//   qtyField.type = "number";
//   qtyField.setAttribute("class", "qty");
//   qtyField.value = document.getElementById("itemNum").value;
//   qty.appendChild(qtyField);
//   newRow.appendChild(qty);

//   //the check button
//   var checkCell = document.createElement("td");
//   checkCell.innerHTML = '<td><button onclick="check(this.parentNode.parentNode);">&#10003;</button></td>';
//   newRow.appendChild(checkCell);

//   //the delete button
//   var deleteCell = document.createElement("td");
//   var deleteBtn = document.createElement("button");
//   deleteBtn.innerHTML = "-";
//   deleteBtn.onclick = function(){deleteRow(this.parentNode.parentNode);};
//   deleteCell.appendChild(deleteBtn);
//   newRow.appendChild(deleteCell);

//   //append row to table
//   document.getElementsByClassName("list")[0].getElementsByTagName("tbody")[0].appendChild(newRow);

//   //reset input fields
//   document.getElementById("itemName").value = "";
//   document.getElementById("itemNum").value = "1";
//   document.getElementById("itemName").focus();
// }

// function deleteRow(row) {
//   row.parentNode.removeChild(row);
// }

// function moveRow(row, direction) {
//   if (direction == -1) { //move up
//     if (row.previousSibling.previousSibling) { //if there are at least 2 rows above (1 row above + header row
//       row.parentNode.insertBefore(row, row.previousSibling);
//     }
//   }
//   else if (direction == 1) { //move down
//     if (row.nextSibling) { //if there is at least 1 row below
//       row.parentNode.insertBefore(row.nextSibling, row);
//     }
//   }
// }

// function check(row) { //check off item (bought)
//   row.setAttribute("class", "checked");
//   row.getElementsByTagName("td")[1].style.textDecoration = "line-through";
//   row.style.opacity = "0.4";
// }


// function generatePrintable() {
//   var namesList = [];
//   var numsList = [];
//   var names = document.getElementsByClassName("name");
//   var nums = document.getElementsByClassName("qty");

//   for (var i = 0; i < names.length; i++) {
//     //if row is not checked off (adding 1 to row num to account for header row)
//     if (document.getElementsByTagName("tr")[i+1].className != "checked") {
//       //add row's name and qty to our list
//       namesList[i] = names[i].innerText;
//       numsList[i] = nums[i].value;
//     }
//   }

//   var listTable = document.createElement("table");
//   var titleRow = document.createElement("tr");
//   titleRow.innerHTML = "<th>Item</th><th>Qty</th>"; //header row
//   listTable.appendChild(titleRow);
//   for (var rowNum in namesList) { //add all rows from our list
//     var newRow = document.createElement("tr");
//     newRow.innerHTML = "<td>" + namesList[rowNum] + "</td><td>" + numsList[rowNum] + "</td>";
//     listTable.appendChild(newRow);
//   }

//   var listWin = window.open("", "ListWindow");

//   listWin.document.body.appendChild(listTable);
// }


// Refactored solution----------------------------------------

function addClick() {

  var newRow = document.createElement("tr");

  // row will have these cells:
  // move up/down button | item name | item qty | check button | delete button

  var cellContents = [
  '<a onclick="moveRow(this.parentNode.parentNode, true);">&#9650;</a><br><a onclick="moveRow(this.parentNode.parentNode, false);">&#9660;</a>', //move button
  '<input type="text" placeholder="item name" class="name" autofocus>', //item name
  '<input type="number" class="qty">', //item qty
  'Check/uncheck<br><button onclick="check(this.parentNode.parentNode);">&#10003;</button>', //check button
  'Remove<br><button onclick="deleteRow(this.parentNode.parentNode)">-</button>' //delete button
  ];

  // wrap each of these in a td and append to the row
  for (var i = 0; i < cellContents.length; i++) {
    var newCell = document.createElement("td");
    newCell.innerHTML = cellContents[i];
    newRow.appendChild(newCell);
  }

  // insert row at top of list & give focus to name input field
  document.querySelector("#list tbody").insertBefore(newRow, document.querySelector("tr:not(:first-child)"));
  newRow.querySelector("input.name").focus();
}


function deleteRow(row) {
  row.parentNode.removeChild(row);
}

function moveRow(row, movingUp) { //movingUp = true/false
  if (movingUp) {
    if (row.previousElementSibling.previousElementSibling) { //if there are at least 2 rows above (1 row above + header row
      row.parentNode.insertBefore(row, row.previousSibling);
    }
  }
  else { //moving down
    if (row.nextSibling) { //if there is at least 1 row below
      row.parentNode.insertBefore(row.nextSibling, row);
    }
  }
}

function check(row) { //check item off the list
  //toggle between (checked) class and no class
  if (row.className) {row.className = "";}
  else {row.className = "checked";}
}

function generatePrintable() {
  var namesList = [];
  var numsList = [];
  var names = document.querySelectorAll("input.name");
  var nums = document.getElementsByClassName("qty");

  for (var i = 0; i < names.length; i++) {
    //if row is not checked off (adding 1 to row num to account for header row)...
    if (document.getElementsByTagName("tr")[i+1].className != "checked") {
      //add row's name and qty to our list
      namesList[i] = names[i].value;
      numsList[i] = nums[i].value;
    }
  }

  var listTable = document.createElement("table");
  var headerRow = document.createElement("tr");

  headerRow.innerHTML = "<th style='text-align: left; padding: 1em;'>Item</th><th style='text-align: right; padding: 1em;'>Qty</th>";
  listTable.appendChild(headerRow);

  // fill out each new row and append to table
  for (var rowNum in namesList) {
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + namesList[rowNum] + "</td><td>" + numsList[rowNum] + "</td>";
    listTable.appendChild(newRow);
  }

  var listWin = window.open("", "ListWindow");

  //style the table
  listTable.style.borderSpacing = "0";
  listTable.style.border = "1px solid black";
  listTable.style.backgroundColor = "#FFFBDD";

  var tds = listTable.getElementsByTagName("td");
  for (var i = 0; i < tds.length; i++) {
    tds[i].style.padding = "1em";
  }

  //right-align all rightmost cells
  var rightCells = listTable.querySelectorAll("td:last-child");
  for (var i = 0; i < rightCells.length; i++) {
    rightCells[i].style.textAlign = "right";
  }

  //alternate-row coloring
  var evenRows = listTable.querySelectorAll("tr:nth-child(even)");
  for (i = 0; i < evenRows.length; i++) {
    evenRows[i].style.backgroundColor = "hsla(0, 0%, 100%, .7)";
  }

  //append table to new window document body
  listWin.document.body.appendChild(listTable);

}


// REFLECTION----------------------------------------

// -What concepts did you solidify in working on this challenge? (reviewing the passing of information, objects, constructors, etc.)
// I solidified ways of accessing and placing items in the HTML DOM.

// -What was the most difficult part of this challenge?
// Basically keeping items and their siblings/parents/children straight.

// -Did an array or object make more sense to use and why?
// Since I started out using an HTML page, I ended up not storing the information in an internal structure, but retrieving information as needed from the HTML table displayed on the page. This allowed me to incorporate meta-data in the form of tag names, classes, pseudo-classes, and ids.