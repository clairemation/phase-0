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

function addItem() {

  var newRow = document.createElement("tr");

  var moveCell = document.createElement("td");
  moveCell.innerHTML = '<a onclick="moveRow(this.parentNode.parentNode, -1);">&#9650;</a><br><a onclick="moveRow(this.parentNode.parentNode, 1);">&#9660;</a>';
  newRow.appendChild(moveCell);

  var name = document.createElement("td");
  name.setAttribute("class", "name");
  name.innerText = document.getElementById("itemName").value;
  newRow.appendChild(name);

  var qty = document.createElement("td");
  var qtyField = document.createElement("input");
  qtyField.type = "number";
  qtyField.setAttribute("class", "qty");
  qtyField.value = document.getElementById("itemNum").value;
  qty.appendChild(qtyField);
  newRow.appendChild(qty);

  var checkCell = document.createElement("td");
  checkCell.innerHTML = '<td><button onclick="check(this.parentNode.parentNode);">&#10003;</button></td>';
  newRow.appendChild(checkCell);

  var deleteCell = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "-";
  deleteBtn.onclick = function(){deleteRow(this.parentNode.parentNode);};
  deleteCell.appendChild(deleteBtn);
  newRow.appendChild(deleteCell);

  document.getElementsByClassName("list")[0].getElementsByTagName("tbody")[0].appendChild(newRow);

  document.getElementById("itemName").value = "";
  document.getElementById("itemNum").value = "1";
  document.getElementById("itemName").focus();
}

function deleteRow(row) {
  row.parentNode.removeChild(row);
}

function moveRow(row, direction) {
  if (direction == -1) {
    if (row.previousSibling.previousSibling) {
      row.parentNode.insertBefore(row, row.previousSibling);
    }
  }
  else if (direction == 1) {
    if (row.nextSibling) {
      row.parentNode.insertBefore(row.nextSibling, row);
    }
  }
}

function check(row) {
  row.setAttribute("class", "checked");
  row.getElementsByTagName("td")[1].style.textDecoration = "line-through";
  row.style.opacity = "0.4";
}


function generatePrintable() {
  var namesList = [];
  var numsList = [];
  var names = document.getElementsByClassName("name");
  var nums = document.getElementsByClassName("qty");

  for (var i = 0; i < names.length; i++) {
    if (document.getElementsByTagName("tr")[i+1].className != "checked") {
      namesList[i] = names[i].innerText;
      numsList[i] = nums[i].value;
    }
  }

  var listTable = document.createElement("table");
  var titleRow = document.createElement("tr");
  titleRow.innerHTML = "<th>Item</th><th>Qty</th>";
  listTable.appendChild(titleRow);
  for (var rowNum in namesList) {
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + namesList[rowNum] + "</td><td>" + numsList[rowNum] + "</td>";
    listTable.appendChild(newRow);
  }

  var listWin = window.open("", "ListWindow");

  listWin.document.body.appendChild(listTable);
}