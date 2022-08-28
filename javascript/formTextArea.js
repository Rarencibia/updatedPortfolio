document.getElementById("details").addEventListener("click", () => {
    if(details.placeholder == "How can we help you?"){
        details.placeholder = " ";
    }
});


document.getElementById("details").addEventListener("onblur"){
    if(details.placeholder == "" || " " ){
        details.placeholder = "How can we help you?";
    }
};