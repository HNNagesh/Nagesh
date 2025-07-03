
const btn = document.getElementById("navbar-btn");
const sideNav = document.getElementById("side-navbar");


btn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  const isOpen = sideNav.style.marginLeft === "0px";
  sideNav.style.marginLeft = isOpen ? "-800px" : "0px";
  btn.innerText = isOpen ? "☰" : "X";
});


sideNav.addEventListener("click", (e) => e.stopPropagation());


  document.addEventListener("click", (e) => {
    const clickInsideNav = sideNav.contains(e.target);
    const clickOnBtn = btn.contains(e.target);
    if (clickInsideNav && !clickOnBtn && sideNav.style.marginLeft === "0px") {
      sideNav.style.marginLeft = "-800px";
      btn.innerText = "☰";
  }
}, true);





