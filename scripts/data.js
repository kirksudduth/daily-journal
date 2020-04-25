console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

// fetch("http://localhost:3000/journalEntries")
//   .then((myJournalEntries) => myJournalEntries.json())
//   .then((myEntries) => {
//     console.log("HUH?");
//     console.table(myEntries);
//     renderJournalEntries(myEntries);
//   });

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/journalEntries")
      .then((response) => response.json())
      .then((myEntries) => {
        console.log("My Entries: ", myEntries);
        renderJournalEntries(myEntries);
      });
  },
};
