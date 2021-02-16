//window.note;

chrome.runtime.onMessage.addListener(function (request) {
    if(request.type === "alert"){
        alert(request.value);
    }else{
        note = request.value;
    }
});