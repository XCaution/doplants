const btnMenu = document.getElementById("btnMenu");
const menuList = document.getElementById("menuList");
const btnNav = document.getElementById("menu2");
function showMenu() {
  menuList.classList.toggle("hidden");
  btnNav.classList.toggle("hidden");
}
btnMenu.addEventListener("click", showMenu);
