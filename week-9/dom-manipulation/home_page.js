// DOM Manipulation Challenge


// I worked on this challenge [with: Chris Wong].


// Add your JavaScript calls to this page:

// Release 1:
  document.getElementsByTagName("div")[0].className = "done";



// Release 2:
document.getElementsByTagName("div")[1].style.display = "none";



// Release 3:
document.getElementsByTagName("h1")[0].innerText = "I completed release 2.";



// Release 4:
document.getElementById("release-3").style.backgroundColor = "#955251";



// Release 5:
var items = document.querySelectorAll(".release-4");
for (var i = 0; i < items.length; i++) {
  items[i].style.fontSize = "2em";
}


// Release 6:
var tmpl = document.getElementById ('hidden');
document.body.appendChild(tmpl.content.cloneNode(true));

// Reflection
// -What did you learn about the DOM?
// I learned about the template tag, though I still don't really understand how it works, or how a template element doesn't display but it's clone does when apprended to the document body.

// -What are some useful methods to use to manipulate the DOM?
// My new favorite methods are querySelector and querySelectorAll, which select an item by using a CSS selector. This is great because in JavaScript if you wanted to select the first X element of Y class inside Z object that didn't have an ID of Whatever, this would take a bunch of steps. Whereas you can do that easily in one line of CSS: z x.y:first-child:not(id:Whatever).
