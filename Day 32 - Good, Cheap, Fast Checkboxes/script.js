const toggles = document.querySelectorAll(".toggle");
const goodEl = document.querySelector("#good");
const cheapEl = document.querySelector("#cheap");
const fastEl = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(clickedOne) {
  if (goodEl.checked && fastEl.checked && cheapEl.checked) {
    if (good === clickedOne) {
      fastEl.checked = false;
    }
    if (cheap === clickedOne) {
      goodEl.checked = false;
    }
    if (fast === clickedOne) {
      cheapEl.checked = false;
    }
  }
}
