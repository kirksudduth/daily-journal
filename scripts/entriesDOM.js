console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

const entryLog = document.querySelector(".entryLog");
const renderJournalEntries = (journalEntries) => {
  for (let i = 0; i < journalEntries.length; i++) {
    const allEntries = journalEntries[i];
    entryLog.innerHTML += makeJournalEntryComponent(allEntries);
  }
};
