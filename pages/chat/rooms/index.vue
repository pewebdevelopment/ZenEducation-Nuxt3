<template>
  <client-only>
    <vue-advanced-chat
      id="VueChat"
      height="calc(100vh - 20px)"
      :current-user-id="currentUserId"
      :show-add-room="true"
      :show-audio="true"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </client-only>
</template>

<script>
// This is the sandbox for using Vue Advanced Chat with Nuxt
// https://github.com/antoine92190/vue-advanced-chat-sandbox/tree/nuxt

import { register } from "vue-advanced-chat";
// import "vue-advanced-chat/dist/vue-advanced-chat.css";
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register();

// Following is later in case of the usage of TypeScript
// interface Message {
//   _id: string
//   content: string
//   senderId: string
//   username?: string
//   timestamp: string
//   date: string
// }

const importChat = () => {
  if (process.client) {
    return { ChatWindow: () => import("vue-advanced-chat") };
  }
  return {};
};

export default {
  data() {
    return {
      components: importChat(),
      currentUserId: "1234",
      rooms: [
        {
          roomId: "1",
          roomName: "Room 1",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
          users: [
            { _id: "1234", username: "John Doe" },
            { _id: "4321", username: "John Snow" },
          ],
        },
        {
          roomId: "2",
          roomName: "Room 2",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
          users: [
            { _id: "1234", username: "John Doe" },
            { _id: "4321", username: "John Snow" },
          ],
        },
        {
          roomId: "3",
          roomName: "Room 3",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
          users: [
            { _id: "1234", username: "John Doe" },
            { _id: "4321", username: "John Snow" },
          ],
        },
      ],
      messages: [],
      messagesLoaded: false,
    };
  },

  methods: {
    fetchMessages({ options = {} }) {
      setTimeout(() => {
        if (options.reset) {
          this.messages = this.addMessages(true);
        } else {
          this.messages = [...this.addMessages(), ...this.messages];
          this.messagesLoaded = true;
        }
        // this.addNewMessage()
      });
    },

    addMessages(reset) {
      const messages = [];

      for (let i = 0; i < 30; i++) {
        messages.push({
          _id: reset ? i : this.messages.length + i,
          content: `${reset ? "" : "paginated"} message ${i + 1}`,
          senderId: "4321",
          username: "John Doe",
          date: "13 November",
          timestamp: "10:20",
        });
      }

      return messages;
    },

    sendMessage(message) {
      this.messages = [
        ...this.messages,
        {
          _id: this.messages.length,
          content: message.content,
          senderId: this.currentUserId,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString(),
        },
      ];
    },

    addNewMessage() {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: "NEW MESSAGE",
            senderId: "1234",
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString(),
          },
        ];
      }, 2000);
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Quicksand", sans-serif;
}

#VueChat:deep(.vac-room-name) {
  background-color: black;
  color: aliceblue;
}
</style>
