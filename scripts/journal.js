console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import journalAPI from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

journalAPI.getJournalEntries().then(renderJournalEntries);
// journalAPI.getJournalEntries().then(entries => renderJournalEntries(entries));

const saveButton = document.querySelector("#button__saveEntry");

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  const journalDate = document.querySelector("#journalDate").value;
  const journalConcepts = document.querySelector("#concepts").value;
  const journalEntryLog = document.querySelector("#journalEntry").value;
  const journalMood = document.querySelector("#mood").value;

  const newEntry = createJournalEntry(
    journalDate,
    journalConcepts,
    journalEntryLog,
    journalMood
  );
  console.log("new entry: ", newEntry);
  if (
    journalDate !== "" &&
    journalConcepts !== "" &&
    journalEntryLog !== "" &&
    journalMood !== ""
  ) {
    journalAPI
      .postJournalEntry(newEntry)
      .then((dataJS) => {
        console.log("dataJS", dataJS);
        return journalAPI.getJournalEntries();
      })
      .then((myJournalEntries) => renderJournalEntries(myJournalEntries));
  } else {
    alert("Fill out the whole form, dummy!");
  }
});

function createJournalEntry(
  journalDate,
  journalConcepts,
  journalEntryLog,
  journalMood
) {
  return {
    date: journalDate,
    concepts: journalConcepts,
    entry: journalEntryLog,
    mood: journalMood,
  };
}
