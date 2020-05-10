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
// Each one of the radio buttons needs to have a
// click event listener attached to it. When any
// of them are clicked, then the only articles that
// should appear are the ones with the corresponding mood.

document.querySelector("#mood__filter").addEventListener("click", (event) => {
  console.log(event);
  if (event.target.value.startsWith("mood--")) {
    const moodFilter = event.target.value.split("--")[1];
    console.log(moodFilter);
    journalAPI.getJournalEntries().then((myEntries) => {
      const moodyEntries = myEntries.filter(
        (entry) => entry.mood == moodFilter
      );
      renderJournalEntries(moodyEntries.reverse());
      // .forEach((value) => {
      //   renderJournalEntries(value);
      // });
      // .then((filterEntries) => {
      //   renderJournalEntries(filterEntries);
      // });
    });
    // .then((filterMoods) => {
    //   console.log(filterMoods);
    // });
  }
});
