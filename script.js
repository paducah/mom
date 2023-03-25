const showMessageButton = document.getElementById("show-message-button");
const message = document.getElementById("message");

showMessageButton.addEventListener("click", () => {
    message.hidden = false;
    showMessageButton.hidden = true;
});
