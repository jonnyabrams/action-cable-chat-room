import consumer from "./consumer";

consumer.subscriptions.create(
  { channel: "RoomChannel", room_id: 1 },
  {
    connected() {
      console.log("Connected!");
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      const messageContainer = document.getElementById("messages");

      // append new message to existing messages
      messageContainer.innerHTML = messageContainer.innerHTML + data.html;
    },
  }
);
