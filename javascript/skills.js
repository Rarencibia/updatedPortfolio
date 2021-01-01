async function getData(){
    let getJson = await fetch("../javascript/skills.json");
    let data = await getJson.json();


    let skillsWrapper = document.getElementById("skillsWrapper");

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

getData();