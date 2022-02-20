// Burger menu
burgerBtn.addEventListener("click", (ev) => {
    burgerMenu.classList.toggle("open");
    mobileHeader.classList.toggle("shadow");
    burgerBtn.classList.toggle("close");
  });
  window.addEventListener("load", (ev) => {
    burgerMenu.classList.add("transition");
  });

//Copyright year
copyrightYear.textContent = new Date().getFullYear();