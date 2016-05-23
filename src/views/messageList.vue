<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" v-el:list>
      <message
        v-for="message in messages | orderBy 'timestamp'"
        track-by="id"
        :message="message">
      </message>
    </ul>
    <textarea class="message-composer" @keyup.enter="trySendMessage"></textarea>
  </div>
</template>