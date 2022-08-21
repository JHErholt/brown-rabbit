// Overflow-y hidden when menus is open
var searchCheck = document.querySelector("#search");
var menuCheck = document.querySelector("#burgermenu");
searchCheck.addEventListener("change", noScroll);
menuCheck.addEventListener("change", noScroll);
function noScroll() {
    var html = document.querySelector("html");
    if (searchCheck.checked || menuCheck.checked){
        html.classList.add("no-scroll")
    } else {
        html.classList.remove("no-scroll")
    }
}