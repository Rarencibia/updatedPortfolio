"use strict";

var nameContainer = document.getElementById("name");
var myName = ["A", "R", "E", "N", "C", "I", "B", "I", "A"];

var timer = function timer(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

document.getElementById("logo").addEventListener("transitionend", function loadLetters() {
  var i, letterContainer;
  return regeneratorRuntime.async(function loadLetters$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < myName.length)) {
            _context.next = 12;
            break;
          }

          letterContainer = document.createElement("div");
          letterContainer.setAttribute("class", "letterContainer");
          letterContainer.setAttribute("id", myName[i]);
          letterContainer.textContent = myName[i];
          nameContainer.appendChild(letterContainer);
          _context.next = 9;
          return regeneratorRuntime.awrap(timer(300));

        case 9:
          i++;
          _context.next = 1;
          break;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});