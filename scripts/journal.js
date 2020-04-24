console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalCollection = [];

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
  <div class="journal_entry">
  <p class="concepts">Concept: ${journalEntry.concepts}</p>
  <p class="date">Date: ${journalEntry.date}</p>
  <p class="entry">Entry: ${journalEntry.entry}</p>
  <p class="mood">Mood: ${journalEntry.mood}</p></div>
`;
};

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
// const journalContainer = document.querySelector(".entryLog");
// const renderJournalEntries = (entries) => {
//   for (let i = 0; i < journalEntries.length; i++) {
//     const entries = journalEntries[i];
//     journalContainer.innerHTML += makeJournalEntryComponent(entries);
//   }
// };
// // Invoke the render function
// renderJournalEntries(journalEntries);

// Using fetch() to Query Data
