console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

// import renderJournalEntries from "./entriesDOM.js";

const entriesURL = "http://localhost:3000/journalEntries";
const journalAPI = {
  getJournalEntries() {
    return fetch(`${entriesURL}`).then((response) => response.json());
    // .then((myEntries) => {
    //   console.log("My Entries: ", myEntries);
    //   renderJournalEntries.renderEntries(myEntries);
    // });
  },
  postJournalEntry(creation) {
    return fetch(`${entriesURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creation),
    }).then((response) => response.json());
  },
};

export default journalAPI;
