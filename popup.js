// popup.js, corresponding to popup.html


function changeImage() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "goose"
        });
    });
}

function changeText() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "text"
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("imageBtn").addEventListener("click", changeImage);
})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("textBtn").addEventListener("click", changeText)
})