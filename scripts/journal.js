/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalCollection = [];

const journalEntry = [
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

for (let i = 0; i < journalEntry.length; i++) {
  const entry = journalEntry[i];
  journalCollection.push(entry);
}

// journalCollection.push(journalEntry);
