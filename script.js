const chatBox = document.getElementById("chat-box");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("You", userMessage, "user");
  input.value = "";

  const typingElem = document.createElement("div");
  typingElem.className = "typing";
  typingElem.id = "typing-indicator";
  typingElem.innerText = "Bot is typing...";
  chatBox.appendChild(typingElem);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();

    document.getElementById("typing-indicator")?.remove();
    appendMessage("Bot", data.reply, "bot");
  } catch (error) {
    document.getElementById("typing-indicator")?.remove();
    appendMessage("Bot", "❌ Error connecting to server.", "bot");
  }
});

function appendMessage(sender, text, className) {
  const msgElem = document.createElement("div");
  msgElem.className = `message ${className}`;
  msgElem.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msgElem);
  chatBox.scrollTop = chatBox.scrollHeight;
}
