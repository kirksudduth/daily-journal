console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import makeJournalEntryComponent from "./entryComponent.js";

function renderEntries(journalEntries) {
  const entryLog = document.querySelector(".entryLog");
  entryLog.innerHTML = "";
  for (let i = 0; i < journalEntries.length; i++) {
    const allEntries = journalEntries[i];
    entryLog.innerHTML += makeJournalEntryComponent.entry(allEntries);
  }
}

export default renderEntries;
