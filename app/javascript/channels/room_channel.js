import consumer from "./consumer";

document.addEventListener("turbolinks:load", () => {
  const roomIdElement = document.getElementById("room-id");
  const roomId = Number(roomIdElement.getAttribute("data-room-id"));

  consumer.subscriptions.create(
    { channel: "RoomChannel", room_id: roomId },
    {
      connected() {
        console.log(`Connected to Room ${roomId}!`);
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        const userIdElement = document.getElementById("user-id");
        const userId = Number(userIdElement.getAttribute("data-user-id"));

        let html;

        if (userId === data.message.user_id) {
          html = data.mine;
        } else {
          html = data.theirs;
        }

        const messageContainer = document.getElementById("messages");

        // append new message to existing messages
        messageContainer.innerHTML = messageContainer.innerHTML + html;
      },
    }
  );
});
