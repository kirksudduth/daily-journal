console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

// import renderJournalEntries from "./entriesDOM.js";

const entriesURL = "http://localhost:3000/journalEntries";
const journalAPI = {
  getJournalEntries() {
    return fetch(`${entriesURL}?_expand=mood`).then((response) =>
      response.json()
    );
    // .then((myEntries) => {
    //   console.log("My Entries: ", myEntries);
    //   renderJournalEntries.renderEntries(myEntries);
    // });
  },
  getEntryById(entryId) {
    return fetch(`${entriesURL}/${entryId}?_expand=mood`).then((response) =>
      response.json()
    );
  },
  createJournalEntry(creation) {
    return fetch(`${entriesURL}?_expand=mood`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creation),
    }).then((response) => response.json());
  },
  deleteJournalEntry(journalID) {
    return fetch(`${entriesURL}/${journalID}?_expand=mood`, {
      method: "DELETE",
    });
  },
  updateJournalEntry(entryObj, id) {
    return fetch(
      `${entriesURL}/${id}?_expand=mood`,
      // second arg of fetch (object) to edit child of resource
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryObj),
      }
    ).then((response) => response.json());
  },
};

export default journalAPI;
