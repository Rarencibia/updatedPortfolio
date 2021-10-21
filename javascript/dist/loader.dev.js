"use strict";

var spinner = document.getElementById("spinner");
var mainContentWrapper = document.getElementById("mainContentWrapper");
window.addEventListener("load", function () {
  mainContentWrapper.style.display = "none";
  setTimeout(function () {
    spinner.style.display = "none";
    mainContentWrapper.style.display = "block";
  }, 1000);
});