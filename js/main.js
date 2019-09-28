const mobileNav = document.getElementsByClassName("mobile-nav")[0];
const navList = document.getElementsByClassName("nav__list")[0];

///Adding mobile nav on click functionality
mobileNav.addEventListener("click", () => {
    if( navList.style.display != "flex" ) {
        navList.style.display = "flex";
    } else if( navList.style.display == "flex" ) {
        navList.style.display = "none";
    }
});

//Adding functionality so that the menu doesn't disappear on larger screens
$(window).resize(() => {
    if( $(window).innerWidth() > 830 ) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
    }
});

//Adding menu/close button functionality on click
mobileNav.addEventListener("click", () => {
    if( mobileNav.src.slice(22) == "img/close.svg" ) {
        mobileNav.src = "img/menu.svg";
    } else {
        mobileNav.src = "img/close.svg";
    }
});

const revStr = (str) => {
    if(str === "") return "";
    return revStr(str.substr(1)) + str[0];
}

console.log(revStr("google"));

