"use strict";

var _this = void 0;

var mobileNav = document.getElementById('mobileNav');
var mobileNavMenu = document.getElementById('mobileNavMenu');
var mobileNavHamburger = document.getElementById('mobileNavHamburger');
var mobileLI = document.getElementsByClassName("mobileLI"); //Open up mobile Navbar

mobileNavHamburger.addEventListener("click", function () {
  _this.mobileNavHamburger.style.display = "none"; //When you click on the hamburger, it disappears.

  mobileNavMenu.style.display = "flex";
}); //Closing mobile Navbar

for (var i = 0; i < mobileLI.length; i++) {
  mobileLI[i].addEventListener("click", function () {
    mobileNavMenu.style.display = "none";
    mobileNavHamburger.style.display = "block";
  });
}