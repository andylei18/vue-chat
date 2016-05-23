<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span>
    </div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        track-by="id"
        :thread="thread">
      </thread>
    </ul>
  </div>
</template>