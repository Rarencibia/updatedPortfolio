let spinner = document.getElementById("spinner");
let mainContentWrapper = document.getElementById("mainContentWrapper");


window.addEventListener("load", () => {
        mainContentWrapper.style.display = "none";
        setTimeout(() => {
            spinner.style.display = "none"; 
            mainContentWrapper.style.display = "block";
        }, 1000);
});