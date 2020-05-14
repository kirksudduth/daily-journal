console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import journalAPI from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

const entryContainer = document.querySelector(".entryLog");
const getAndRenderEntries = () => {
  entryContainer.innerHTML = "";
  journalAPI.getJournalEntries().then(renderJournalEntries);
};
// Function to get journal entries from API and then render
// them to DOM
getAndRenderEntries();
const recordEntryButton = document.querySelector("#button__recordEntry");

recordEntryButton.addEventListener("click", (event) => {
  event.preventDefault();
  const journalDate = document.querySelector("#journalDate").value;
  const journalConcepts = document.querySelector("#concepts").value;
  const journalEntryLog = document.querySelector("#journalEntry").value;
  const journalMood = parseInt(document.querySelector("#mood").value);

  const newEntry = makeJournalEntry(
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
    journalAPI.createJournalEntry(newEntry).then(getAndRenderEntries);
  } else {
    alert("Fill out the whole form, dummy!");
  }
});

function makeJournalEntry(
  journalDate,
  journalConcepts,
  journalEntryLog,
  journalMood
) {
  return {
    date: journalDate,
    concepts: journalConcepts,
    entry: journalEntryLog,
    moodId: journalMood,
  };
}

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
    });
  }
});

entryContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("delete--")) {
    const entryID = event.target.id.split("--")[1];
    // console.log(entryID);
    journalAPI.deleteJournalEntry(entryID).then(getAndRenderEntries);
  }
  if (event.target.id.startsWith("edit--")) {
    const entryID = event.target.id.split("--")[1];
    journalAPI.getEntryById(entryID).then((journalFormEntry) => {
      prepopulateForm(journalFormEntry);
    });
  }
});

const formConcept = document.getElementById("formConcept");
const formDate = document.getElementById("formDate");
const formEntry = document.getElementById("formEntry");
const formMood = document.getElementById("formMood");
const formId = document.getElementById("formId");

const prepopulateForm = (entry) => {
  formConcept.value = entry.concepts;
  formDate.value = entry.date;
  formEntry.value = entry.entry;
  formMood.value = entry.mood.label;
  formId.value = entry.id;
};

const clearForm = () => {
  formConcept.value = "";
  formDate.value = "";
  formEntry.value = "";
  formMood.value = "";
  formId.value = "";
};
document
  .getElementById("btn--saveFormEntry")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const editedEntryId = formId.value;
    const editedEntryConcept = formConcept.value;
    const editedEntryDate = formDate.value;
    const editedEntryMood = formMood.value;

    const formValueObj = {
      concepts: formConcept.value,
      date: formDate.value,
      entry: formEntry.value,
      moodId: formMood.value.id,
    };
    if (editedEntryId != "") {
      journalAPI
        .updateJournalEntry(formValueObj, editedEntryId)
        .then(getAndRenderEntries);
      clearForm();
    }
    if (
      editedEntryConcept === "" ||
      editedEntryDate === "" ||
      editedEntryMood === ""
    ) {
      alert("Please complete all fields in Edit Journal Entry.");
    } else {
      journalAPI.createJournalEntry(formValueObj).then(getAndRenderEntries);
      clearForm();
    }
  });

export default entryContainer;
