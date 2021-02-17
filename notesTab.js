let noteText = document.getElementById('notesText');

document.addEventListener('DOMContentLoaded', postContentLoadNote, false);

function postContentLoadNote() {

    chrome.runtime.getBackgroundPage(function(bg) {
        if (bg.note) {
            noteText.value = bg.note;
        }
        setInterval(function() {
            bg.note = noteText.value
        }, 1000);
    })

    //noteText.addEventListener('change', updateNotes);

};

function updateNotes() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "notes",
            value: noteText.value
        });
    });
}