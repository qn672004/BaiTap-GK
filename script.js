function sendMessage() {
  var userInput = document.getElementById('user-input').value;
  var chatBody = document.getElementById('chat-body');

  // Append user message to the chat body
  chatBody.innerHTML += '<div class="message user-message">' + userInput + '</div>';

  // Simulate a response from the bot (you would replace this with the actual response from your backend)
  var botResponse = 'I am a ChatGPT-inspired bot!';
  chatBody.innerHTML += '<div class="message bot-message">' + botResponse + '</div>';

  // Clear the user input
  document.getElementById('user-input').value = '';

  // Scroll to the bottom of the chat body
  chatBody.scrollTop = chatBody.scrollHeight;
}
