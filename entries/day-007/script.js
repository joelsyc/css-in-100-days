const searchButton = document.getElementsByClassName("search_icon");
const searchBar = document.getElementsByClassName("search_bar");
const navIcon = document.getElementsByClassName("navicon");
const navList = document.getElementsByClassName("navlist");
const header = document.getElementsByClassName("header");
const main = document.getElementsByClassName("main");
searchButton[0].onclick = () => {
    searchBar[0].classList.toggle("search_bar--active");
}
navIcon[0].onclick = () => {
    navList[0].classList.toggle("navlist--active");
    header[0].classList.toggle("header--active");
    main[0].classList.toggle("main--active");
}