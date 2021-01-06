"use strict";

var skillsWrapper = document.getElementById("skillsWrapper");
var sideSkillsWrapper = document.getElementById("sideSkillsWrapper");

function getData() {
  var getJson, data, i, createContainer, addImage, writeName;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("../javascript/skills.json"));

        case 2:
          getJson = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(getJson.json());

        case 5:
          data = _context.sent;

          for (i = 0; i < data.skills.length; i++) {
            createContainer = document.createElement("div");
            createContainer.setAttribute("id", "createContainer");
            addImage = document.createElement("img");
            addImage.src = data.skills[i].img;
            addImage.setAttribute("id", data.skills[i].name);
            addImage.setAttribute("class", "skillsImg");
            writeName = document.createElement("p");
            writeName.setAttribute("id", data.skills[i].name);
            writeName.setAttribute("class", "skillsName");
            writeName.textContent = data.skills[i].name;
            skillsWrapper.appendChild(createContainer);
            createContainer.appendChild(addImage);
            createContainer.appendChild(writeName);
          }

          ;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function getSideSkills() {
  var getJson, data, i, createContainer, sideSkills;
  return regeneratorRuntime.async(function getSideSkills$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("../javascript/sideSkills.json"));

        case 2:
          getJson = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(getJson.json());

        case 5:
          data = _context2.sent;

          for (i = 0; i < data.sideSkills.length; i++) {
            createContainer = document.createElement("div");
            createContainer.setAttribute("id", "sideSkillsContainer");
            sideSkills = document.createElement("h3");
            sideSkills.setAttribute("id", data.sideSkills[i].name);
            sideSkills.innerText = data.sideSkills[i].name;
            sideSkillsWrapper.appendChild(createContainer);
            createContainer.appendChild(sideSkills);
          }

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;
getData(); // getSideSkills();