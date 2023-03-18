export default function handleMenu(element:any) {
  const menu = document.getElementById("menu");

  if (menu !== null) {
    if (menu.classList.contains("menu-hidden")) {
      menu.classList.remove("menu-hidden");
      menu.classList.add("menu-active");
    } else if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
      menu.classList.add("menu-hidden");
    }
  }
}
