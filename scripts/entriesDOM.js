console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import makeJournalEntryComponent from "./entryComponent.js";
import containers from "./journal.js";

function renderEntries(journalEntries) {
  // const entryLog = document.querySelector(".entryLog");
  containers.entryContainer.innerHTML = "";
  for (let i = journalEntries.length - 1; i >= 0; i--) {
    const allEntries = journalEntries[i];
    containers.entryContainer.innerHTML += makeJournalEntryComponent.entry(
      allEntries
    );
  }
}

function renderMoods(moods) {
  moods.forEach((mood) => {
    containers.moodsContainer.innerHTML += makeJournalEntryComponent.mood(mood);
    containers.moodsEditContainer.innerHTML += makeJournalEntryComponent.mood(
      mood
    );
    containers.moodsFilterContainer.innerHTML += makeJournalEntryComponent.filterMood(
      mood
    );
  });
}
export default { renderEntries, renderMoods };
