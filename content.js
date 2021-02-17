chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === "alert") {
        alert(request.value);
    }
})