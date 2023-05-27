<script setup>
    import ChatContacts from '../Contact/ChatContacts.vue';
    import ChatContent from '../Chat/ChatContent.vue'
</script>
<template>
    <div class="w-full flex">
        <ChatContacts class="basis-1/3"/>
        <ChatContent class="basis-2/3"/>
    </div>
</template>
<style scoped></style>