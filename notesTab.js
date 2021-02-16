let noteText = document.getElementById('notesText');

document.addEventListener('DOMContentLoaded', postContentLoadNote, false);

function postContentLoadNote () {

    const bg = chrome.extension.getBackgroundPage();
    
    if(bg.note != null){
        noteText.value = bg.note;
    }

    noteText.addEventListener('change', updateNotes);
    
};

function updateNotes () {
    chrome.tabs.sendMessage({
        type: "notes",
        value: noteText.value
    });
}