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


  // Side nav with scrollll


  const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".desktop-side-nav .side-nav  ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
