// Toggle the drop down menu display none-block
function dropDown(){
    document.getElementById("drop-menu").classList.toggle("show");

}

// toggle the menu close when user clicks elsewhere


window.onclick = function(event) {
    if (!event.target.matches('.fa-bars')) {
      var dropdowns = document.getElementsByClassName("drop-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }