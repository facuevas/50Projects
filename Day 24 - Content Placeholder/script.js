const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `     
    <img
    src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    alt=""
  />`;

  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tenetur.";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 8, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
