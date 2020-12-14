const logo = document.querySelectorAll('#logo path');

for(let i = 0; i<logo.length; i++){
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}


//modal stuff
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
