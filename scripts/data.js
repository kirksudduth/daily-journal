console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

fetch("http://localhost:3000/journalEntries")
  .then((myJournalEntries) => myJournalEntries.json())
  .then((myEntries) => {
    console.log("HUH?");
    console.table(myEntries);
  });
