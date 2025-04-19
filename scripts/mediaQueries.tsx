    var chatDiv = document.createElement('div');
    chatDiv.id = 'botpressChat';
    document.body.appendChild(chatDiv);

    var script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.onload = function() {
        // Once inject.js is loaded, load config.js
        var script2 = document.createElement('script');
        script2.src = 'https://mediafiles.botpress.cloud/c80ccde7-2db0-4ca9-99b0-14c91448ee4e/webchat/config.js';
        script2.defer = true;
        document.body.appendChild(script2);
    };
    document.body.appendChild(script1);
    alert("Hi! This is to inform you that we have successfully plugged in our AI Chatbot, Chat2Eco, right at the bottom-right corner of your screen! You may check it out!");

function MediaWidth(size: number) {
    var media = window.matchMedia("(max-width: " + size + "px)");
    return media.matches;
}

function MediaHeight(size: number) {
    var media = window.matchMedia("(max-height: " + size + "px)");
    return media.matches;
}

function MediaOrientation(orientation: string) {
    var media = window.matchMedia("(orientation: " + orientation + ")");
    return media.matches;
}


export { MediaWidth, MediaHeight, MediaOrientation}
