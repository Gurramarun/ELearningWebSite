// JavaScript to handle chat box functionality
const chatPopup = document.getElementById("chat-popup");
const closeChatBtn = document.getElementById("close-chat");
const sendMessageBtn = document.getElementById("send-message");
const messageInput = document.getElementById("message-input");

// Open chat box
function openChat() {
  chatPopup.style.display = "block";
}

// Close chat box
function closeChat() {
  chatPopup.style.display = "none";
}

// Send message
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== "") {
    // Display the message in the chat box
    const chatMessages = document.querySelector(".chat-messages");
    const newMessage = document.createElement("div");
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);

    // Clear the input
    messageInput.value = "";
  }
}

// Attach event listeners
closeChatBtn.addEventListener("click", closeChat);
sendMessageBtn.addEventListener("click", sendMessage);

// Open chat by default (for demonstration)
openChat();
