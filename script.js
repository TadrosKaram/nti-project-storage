//features button

const features = document.querySelector(".viewf");

features.addEventListener("click", function () {
  window.alert(
    "Combine the learning outcomes in the first week Coded a page from scratch, Used bootstrap css framework, This project is gonna be used to group all NTI projects,Added some JavaScript & overall responsive website on all screen"
  );
});

/////////////////////////////////////////////////////////////

//nav-bar hovering effect & scrollUp button

const links = document.querySelectorAll(".list .nav-link");
const home = document.querySelector(".list .def");
const scrollUp = document.querySelector("#thescroll");

let isClicked = false;

scrollUp.addEventListener("click", function () {
  isClicked = true;
});

links.forEach((Element) => {
  Element.addEventListener("click", function () {
    const elementActive = document.querySelector(".list .active");

    elementActive.classList.remove("active");
    this.classList.add("active");
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY == 0 || isClicked) {
    document.querySelector(".list .active")?.classList.remove("active");
    home.classList.add("active");
    scrollUp.classList.add("hide-scroll");
    isClicked = false;
  } else if (window.scrollY > 500) {
    scrollUp.classList.remove("hide-scroll");
  }
});
console.log(window.scrollY);
/////////////////////////////////////////////////////////////////

// Dark mode and light mode

const mode = document.querySelector(".mode");
const color = document.querySelector("body");

isDark = true;

mode.addEventListener("click", function () {
  if (isDark) {
    color.style.backgroundColor = "#ffffff";
    color.style.color = "#000000";
    mode.classList.remove("btn-outline-light");
    mode.classList.add("btn-outline-dark");
    mode.textContent = "Dark";
    isDark = false;
  } else {
    color.style.backgroundColor = "#000000";
    color.style.color = "#ffffff";
    mode.classList.remove("btn-outline-dark");
    mode.classList.add("btn-outline-light");
    mode.textContent = "Light";
    isDark = true;
  }
});
