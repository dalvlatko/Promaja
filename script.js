let svg= document.querySelector("#Capa_1")
svg.addEventListener("click", e => {console.log(e);})

var menu_button = document.querySelector("#menu-button");
var menu = document.querySelector("#menu");
menu_button.addEventListener("click", e => {
  console.log(e);
  menu.classList.toggle("menu-open");
});
menu.addEventListener("click", e => {
  console.log(e);
  menu.classList.toggle("menu-open");
});