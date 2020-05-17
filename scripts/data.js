console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

const entriesURL = "http://localhost:3000/journalEntries";
const journalAPI = {
  getJournalEntries() {
    return fetch(`${entriesURL}?_expand=mood`).then((response) =>
      response.json()
    );
  },
  getEntryById(entryId) {
    return fetch(`${entriesURL}/${entryId}?_expand=mood`).then((response) =>
      response.json()
    );
  },
  createJournalEntry(creation) {
    return fetch(`${entriesURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creation),
    }).then((response) => response.json());
  },
  deleteJournalEntry(journalID) {
    return fetch(`${entriesURL}/${journalID}`, {
      method: "DELETE",
    });
  },
  updateJournalEntry(entryObj, id) {
    return fetch(
      `${entriesURL}/${id}`,
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
  getMoods() {
    return fetch(`http://localhost:3000/moods`).then((response) =>
      response.json()
    );
    // .then((moods) => console.log(moods));
  },
};

export default journalAPI;
