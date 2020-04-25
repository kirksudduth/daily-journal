console.log("IF YOU'RE AFRAID TO DO IT, DO IT UNTIL YOU'RE NOT.");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

// // Invoke the render function

// Using fetch() to Query Data

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries());
