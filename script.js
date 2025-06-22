// This file contains the JavaScript code that handles the functionality of the guest book.
// It captures form submissions, stores guest book entries in local storage, and dynamically updates the displayed entries on the page.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbook-form');
    const entriesList = document.getElementById('entries-list');

    // Load existing entries from local storage
    loadEntries();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['name'].value;
        const message = form.elements['message'].value;

        if (name && message) {
            if (containsProfanity(name) || containsProfanity(message)) {
                alert("Please refrain from using inappropriate language.");
                return; // Don't submit the entry
            }

            const entry = { name, message };
            saveEntry(entry);
            form.reset();
            addEntryToList(entry);
        }
    });

    function saveEntry(entry) {
        const entries = getEntries();
        entries.push(entry);
        localStorage.setItem('guestbookEntries', JSON.stringify(entries));
    }

    function getEntries() {
        const entries = localStorage.getItem('guestbookEntries');
        return entries ? JSON.parse(entries) : [];
    }

    function loadEntries() {
        const entries = getEntries();
        entries.forEach(addEntryToList);
    }

    function addEntryToList(entry) {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.name}: ${entry.message}`;
        entriesList.appendChild(listItem);
    }

    function containsProfanity(text) {
        const badWords = ["pussy", "niger", "gay", "bitch", "fuck", "fucking"]; // Replace with your list of bad words
        const lowerCaseText = text.toLowerCase();
        return badWords.some(word => lowerCaseText.includes(word));
    }
});