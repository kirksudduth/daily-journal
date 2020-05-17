console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import journalAPI from "./data.js";
import render from "./entriesDOM.js";

const containers = {
  entryContainer: document.querySelector(".entryLog"),
  moodsContainer: document.querySelector("#moods"),
  moodsEditContainer: document.querySelector("#formMoods"),
  moodsFilterContainer: document.querySelector("#mood-filter__options"),
};

const getAndRenderEntries = () => {
  containers.entryContainer.innerHTML = "";
  journalAPI.getJournalEntries().then(render.renderEntries);
};
// Function to get journal entries from API and then render
// them to DOM
getAndRenderEntries();
const getAndRenderMoods = () => {
  journalAPI.getMoods().then(render.renderMoods);
};

getAndRenderMoods();

const recordEntryButton = document.querySelector("#button__recordEntry");

recordEntryButton.addEventListener("click", (event) => {
  event.preventDefault();
  let journalDate = document.querySelector("#journalDate").value;
  let journalConcepts = document.querySelector("#concepts").value;
  let journalEntryLog = document.querySelector("#journalEntry").value;
  let journalMood = parseInt(document.querySelector("#moods").value);

  const clearEntryForm = () => {
    journalDate = "";
    journalConcepts = "";
    journalEntryLog = "";
    journalMood = "";
  };

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
    document.getElementById("firstForm").reset();
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
        (entry) => entry.moodId == moodFilter
      );
      render.renderEntries(moodyEntries);
    });
  }
});

containers.entryContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("delete--")) {
    const entryID = event.target.id.split("--")[1];
    // console.log(entryID);
    journalAPI.deleteJournalEntry(entryID).then(getAndRenderEntries);
  }
  if (event.target.id.startsWith("edit--")) {
    const entryID = event.target.id.split("--")[1];
    journalAPI.getEntryById(entryID).then((journalFormEntry) => {
      console.log(journalFormEntry);
      prepopulateForm(journalFormEntry);
    });
  }
});

const formConcept = document.getElementById("formConcept");
const formDate = document.getElementById("formDate");
const formEntry = document.getElementById("formEntry");
const formMood = document.getElementById("formMoods");
const formId = document.getElementById("formId");

const prepopulateForm = (entry) => {
  console.log(entry);
  formConcept.value = entry.concepts;
  formDate.value = entry.date;
  formEntry.value = entry.entry;
  formMood.value = entry.moodId;
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
      date: formDate.value,
      concepts: formConcept.value,
      entry: formEntry.value,
      moodId: formMood.value,
      // id: editedEntryId.value,
    };
    if (editedEntryId != "") {
      journalAPI
        .updateJournalEntry(formValueObj, editedEntryId)
        .then(getAndRenderEntries);
      clearForm();
    } else if (
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

export default containers;
