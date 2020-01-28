chrome.storage.sync.get('lastMark', function(data) {

    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');
    var tr = document.createElement('tr');
    for (let i = 0; i < data.lastMark.length; i++) {
        var text = document.createElement("td");
            if (i == 2) {
                var link = document.createElement("a");
                link.setAttribute("href", data.lastMark[2])
                link.innerText = data.lastMark[2]
                text.appendChild(link)
            } else {
                text.innerText = data.lastMark[i]
            }
        tr.appendChild(text);
    }
    table.appendChild(tr);
    body.appendChild(table);

});
