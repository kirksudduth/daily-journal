/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalCollection = [];

const journalEntries = [
  {
    date: "04/21/2020",
    concepts: "objects",
    entry: "it has been an eventful learning day. feeling good about it.",
    mood: "happy",
  },
  {
    date: "04/21/2020",
    concepts: "methods",
    entry:
      "i understand (kind of) what a method is. which is more than i can say about myself yesterday.",
    mood: "meh",
  },
  {
    date: "04/21/2020",
    concepts: "this",
    entry: "we haven't dove super far into it yet. fringe understanding so far",
    mood: "confused",
  },
];

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
  <div class="journal_entry">
  <ul>
  <li class="concepts">${journalEntry.concepts}</li>
  <li class="date">${journalEntry.date}</li>
  <li class="entry">${journalEntry.entry}</li>
  <li class="mood">${journalEntry.mood}</li></ul></div>
`;
};

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const journalContainer = document.querySelector(".entryLog");
const renderJournalEntries = (entries) => {
  for (let i = 0; i < journalEntries.length; i++) {
    const entries = journalEntries[i];
    journalContainer.innerHTML += makeJournalEntryComponent(entries);
  }
};
// Invoke the render function
renderJournalEntries(journalEntries);
