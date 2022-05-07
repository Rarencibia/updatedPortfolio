let skillsWrapper = document.getElementById("skillsWrapper");
let sideSkillsWrapper = document.getElementById("sideSkillsWrapper");

async function getData(){
    const getJson = await fetch("../javascript/skills.json");
    const data = await getJson.json();



    for(let i = 0; i < data.skills.length; i++){
        let createContainer = document.createElement("div");
        createContainer.setAttribute("id", "createContainer");

        let addImage = document.createElement("img");
        addImage.src = data.skills[i].img;
        addImage.setAttribute("id", data.skills[i].name);
        addImage.setAttribute("class", "skillsImg")

        let writeName = document.createElement("p");
        writeName.setAttribute("id", data.skills[i].name);
        writeName.setAttribute("class", "skillsName");
        writeName.textContent = data.skills[i].name;

        skillsWrapper.appendChild(createContainer);
        createContainer.appendChild(addImage);
        createContainer.appendChild(writeName); 

        
    };

    

};

async function getSideSkills(){
    const getJson = await fetch("../javascript/sideSkills.json");
    const data = await getJson.json();

    for(let i = 0; i < data.sideSkills.length; i++){
        let createContainer = document.createElement("div");
        createContainer.setAttribute("id", "sideSkillsContainer");

        let sideSkills = document.createElement("h3");
        sideSkills.setAttribute("id", data.sideSkills[i].name);
        sideSkills.innerText = data.sideSkills[i].name;

        sideSkillsWrapper.appendChild(createContainer);
        createContainer.appendChild(sideSkills);
    }

};

getData();
// getSideSkills();
