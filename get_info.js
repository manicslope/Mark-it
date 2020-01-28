var currentTime = document.getElementsByClassName("ytp-time-current")[0].innerText.split(":");
var hours = currentTime[currentTime.length-3]
var minutes = currentTime[currentTime.length-2]
if (typeof hours === "undefined") {
    hours = "";
} else {
    hours = hours + "h"
}
if (typeof minutes === "undefined") {
    minutes = "";
} else {
    minutes = minutes + "m"
}
var currentTime = hours + minutes + currentTime[currentTime.length-1] + "s"
var url = document.URL.split("&")[0];
var name = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText
var result = url + "&t=" + currentTime;
var channels = document.getElementsByClassName("style-scope ytd-video-owner-renderer")
for (let i = 0; i < channels.length; i++) {
    if (channels[i].id == "channel-name") {
        var channel = channels[i].innerText;
        break;
    }
}
// alert("Name: " + name + "\nChannel: " + channel + "\nTimecode: " + result + "\nNote: " + note);
// var mark = [name, channel, result, note]
var mark = [channel, note, result]
delimeter = " | "
prompt("", channel + delimeter + note + delimeter + result);
chrome.storage.sync.set({ lastMark: mark })
