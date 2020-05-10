console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import makeJournalEntryComponent from "./entryComponent.js";
import entryContainer from "./journal.js";

function renderEntries(journalEntries) {
  // const entryLog = document.querySelector(".entryLog");
  // entryLog.innerHTML = "";
  for (let i = journalEntries.length - 1; i >= 0; i--) {
    const allEntries = journalEntries[i];
    entryContainer.innerHTML += makeJournalEntryComponent.entry(allEntries);
  }
}

export default renderEntries;
