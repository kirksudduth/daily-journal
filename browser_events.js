console.log("You're doing it. Don't stop!");
let hOne = document.querySelector("disabled");
const toggleFunction = () => {
  if (hOne === true) {
    () => {
      let element = document.querySelector(".dailyJournal");
      element.classList.remove("disabled");
      element.classList.add("enabled");
    };
  }
};

const mainDailyJournal = document.querySelector(".dailyJournal");

mainDailyJournal.addEventListener("click", () => {
  toggleFunction();
});
// mainDailyJournal;
