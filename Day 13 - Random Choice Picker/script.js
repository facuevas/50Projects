const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

const createTags = (input) => {
  const choices = input
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());

  tagsEl.innerHTML = "";

  choices.forEach((choice) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = choice;
    tagsEl.appendChild(tagElement);
  });
};

const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomChoice = pickRandomChoice();

    highlightChoice(randomChoice);

    setTimeout(() => {
      unHighlightChoice(randomChoice);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomChoice = pickRandomChoice();
      highlightChoice(randomChoice);
    }, 100);
  }, times * 100);
};

const pickRandomChoice = () => {
  const allTags = document.querySelectorAll(".tag");
  return allTags[Math.floor(Math.random() * allTags.length)];
};

const highlightChoice = (choice) => {
  choice.classList.add("highlight");
};

const unHighlightChoice = (choice) => {
  choice.classList.remove("highlight");
};
