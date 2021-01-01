"use strict";

function getData() {
  var getJson, data, skillsWrapper, i, createContainer, addImage, writeName;
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
          skillsWrapper = document.getElementById("skillsWrapper");

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

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

;
getData();