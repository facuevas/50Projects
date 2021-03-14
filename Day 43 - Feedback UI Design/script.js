const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const send = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeCurrentActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }

  if (e.target.classList.contains("rating")) {
    removeCurrentActive();
    e.target.classList.add("active");
    selectedRating = e.target.firstElementChild.nextElementSibling.innerHTML;
  }
});

send.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feed: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support!</p>
    `;
});

const removeCurrentActive = () => {
  ratings.forEach((rating) => rating.classList.remove("active"));
};
