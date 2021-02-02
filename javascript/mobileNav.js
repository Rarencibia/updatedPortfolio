let mobileNav = document.getElementById('mobileNav');
let mobileNavMenu = document.getElementById('mobileNavMenu');
let mobileNavHamburger = document.getElementById('mobileNavHamburger');
let mobileLI = document.getElementsByClassName("mobileLI");

//Open up mobile Navbar
mobileNavHamburger.addEventListener("click", () => {
    this.mobileNavHamburger.style.display = "none"; //When you click on the hamburger, it disappears.
    mobileNavMenu.style.display = "flex"
});

//Closing mobile Navbar
for(let i = 0; i < mobileLI.length; i++){
    mobileLI[i].addEventListener("click", () => {
        mobileNavMenu.style.display = "none";
        mobileNavHamburger.style.display = "block";
    });
    
}


