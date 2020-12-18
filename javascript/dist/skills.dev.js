"use strict";

function getData() {
  var fetchData, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('skills.json'));

        case 2:
          fetchData = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(fetchData.json());

        case 5:
          data = _context.sent;
          console.log(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

getData();