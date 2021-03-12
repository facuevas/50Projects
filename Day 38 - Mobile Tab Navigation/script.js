const contents = document.querySelectorAll(".content");
const navList = document.querySelectorAll("li");

let currentActive = 0;

navList.forEach((navItem, index) => {
  navItem.addEventListener("click", () => {
    contents[currentActive].classList.remove("show");
    navList[currentActive].classList.remove("active");
    contents[index].classList.add("show");
    navItem.classList.add("active");
    currentActive = index;
  });
});
