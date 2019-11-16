function pageopen()
{
    window.location.href='post.html'
}
var deleteButton=document.getElementById("trash");
var deleteButton1=document.getElementById("trash1");
var deleteButton2=document.getElementById("trash2");
var deleteButton3=document.getElementById("trash3");
var deleteButton4=document.getElementById("trash4");
var deletemodal=document.getElementById("delete-myModal");
// When the user clicks the button, open the modal 
deleteButton.onclick = function() {
  deletemodal.style.display = "block";
}
deleteButton1.onclick = function() {
  deletemodal.style.display = "block";
}
deleteButton2.onclick = function() {
  deletemodal.style.display = "block";
}
deleteButton3.onclick = function() {
  deletemodal.style.display = "block";
}
deleteButton4.onclick = function() {
  deletemodal.style.display = "block";
}

function no()
{
    deletemodal.style.display = "none";
}