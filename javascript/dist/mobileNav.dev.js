"use strict";

var _this = void 0;

var mobileNav = document.getElementById('mobileNav');
var mobileNavMenu = document.getElementById('mobileNavMenu');
var mobileNavHamburger = document.getElementById('mobileNavHamburger'); //Open up mobile Navbar

mobileNavHamburger.addEventListener("click", function () {
  _this.mobileNavHamburger.style.display = "none"; //When you click on the hamburger, it disappears.

  mobileNavMenu.style.display = "flex";
}); //Closing mobile Navbar

document.getElementById("mobileUL").addEventListener("click", function () {
  mobileNavMenu.style.display = "none";
  mobileNavHamburger.style.display = "block";
});