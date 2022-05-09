let nameContainer = document.getElementById("name");

let myName = ["A","R", "E", "N", "C","I", "B","I", "A"];


const timer = ms => new Promise(res => setTimeout(res, ms));

//transitionend

// document.getElementById("logo").addEventListener("load", 
//     async function loadLetters () { // We need to wrap the loop into an async function for this to work
//         for (var i = 0; i < myName.length; i++) {
//             let letterContainer = document.createElement("div");
//             letterContainer.setAttribute("class", "letterContainer");
//             letterContainer.setAttribute("id", myName[i]);
//             letterContainer.textContent = myName[i];

//             nameContainer.appendChild(letterContainer);


            


//             await timer(300); // then the created Promise can be awaited


//         }
        
//     });


window.addEventListener("load", 
async function loadLetters () { // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < myName.length; i++) {
        let letterContainer = document.createElement("div");
        letterContainer.setAttribute("class", "letterContainer");
        letterContainer.setAttribute("id", myName[i]);
        letterContainer.textContent = myName[i];

        nameContainer.appendChild(letterContainer);


        


        await timer(300); // then the created Promise can be awaited


    }
    
})