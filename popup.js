let mark = document.getElementById('mark');

mark.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {code: 'var note=' + JSON.stringify(document.getElementById("note").value)}, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'get_info.js'});
        });
    });
};
