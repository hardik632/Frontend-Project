var modal = document.getElementById("signup-myModal");

// Get the button that opens the modal
var btn = document.getElementById("signup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("signup-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("signin-myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("signin-button");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("signin-close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
var respan=document.getElementById('namsignup');

respan.onclick=function()
{
  modal1.style.display = "none";
  modal.style.display = "block";

}