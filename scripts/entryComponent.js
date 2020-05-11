console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

import apiData from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

const makeJournalEntryComponent = {
  entry: function (journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <div class="journal_entry">
      <h2 class="concepts disabled">Concept: ${journalEntry.concepts}</h2>
      <p class="date">
        <label class="date_class">Date:</label> ${journalEntry.date}</p>
      <p class="entry">
        <label class="entry_class">Entry:</label> ${journalEntry.entry}</p>
      <p class="mood">
        <label class="mood_class">Mood:</label> ${journalEntry.mood}</p>
        <button id="delete--${journalEntry.id}">Delete</button>
        <button id="edit--${journalEntry.id}">Edit</button></div>
    `;
  },
};

export default makeJournalEntryComponent;
