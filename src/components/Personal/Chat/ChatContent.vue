<script setup>
import ChatHeader from './UI/ChatHeader.vue';
import { contactStore } from '../../../stores/contacts';
import { messageStore } from '../../../stores/message';
import { storeToRefs } from 'pinia'
import ChatMessage from './ChatMessage.vue';
const contacts = contactStore();
const message = messageStore();
const { currentUser, currentStatus } = storeToRefs(contacts)
const { Messages } = storeToRefs(message)
</script>
<template>
    <div class="w-full bg-gray-400 flex flex-col">
        <ChatHeader :currentName="currentUser" :currentStatus="currentStatus" />
        <div class="w-full h-full bg-white flex flex-col pl-10 pr-10">
            <ChatMessage v-for="(item, index) in Messages" :key="index" :msg="item" />
        </div>
    </div>
</template>
<style scoped></style>