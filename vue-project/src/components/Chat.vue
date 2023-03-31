<template>
    <div class="chat" ref="currentMessage">
      <div class="profile">
        <img v-if="chat.isAi" src="@/assets/bot.svg" alt="" />
        <img v-else src="@/assets/user.svg" alt="" />
      </div>
      <div class="message" id="no">
        {{ chat.value }}
      </div>
    </div>
  </template>
    
    <script setup>
  import { nextTick, onMounted, ref, watch } from "vue";
  defineProps({
    chat: {
      type: Object || null,
    },
  });
  const currentMessage = ref(null);
  onMounted(async () => {
    await nextTick();
    const div = currentMessage.value;
    div.scrollIntoView({ behavior: "smooth" });
  });
  </script>
    
    <style>

.message {
  flex: 1;
  color: #dcdcdc;
  font-size: 20px;
  max-width: 100%;
  overflow-x: scroll;
  white-space: pre-wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.message::-webkit-scrollbar {
  display: none;
}

  </style>