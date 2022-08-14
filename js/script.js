document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        var message = "Page is loaded on the event of " + event.type;
        document.getElementById('message').innerText = message;
    }
)
// version 2022-08-14 17:24