window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) {
       navbar.classList.add("hidden");
    } else {
       navbar.classList.remove("hidden");
    }
   };