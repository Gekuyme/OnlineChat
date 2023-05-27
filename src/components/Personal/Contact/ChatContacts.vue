<script setup>
import ContactView from './UI/ContactView.vue';
import { contactStore } from '../../../stores/contacts';
import { storeToRefs } from 'pinia'
const store = contactStore()
const { contacts } = storeToRefs(store)



</script>
<template>
    <div class="w-full bg-slate-200 ">
        <div class="flex w-full mt-5 mb-5">
            <p class="text-3xl font-sans ml-10">Contacts</p>
        </div>
        <div class="search flex w-full justify-center">
            <div class="relative left-8 top-3">
                <svg class="h-5 w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </div>
            <input type="text" class="w-4/5 h-8 rounded-md pl-10 pt-5 pb-5 transition-all focus:outline-none"
                placeholder="Search">
        </div>
        <div class="flex items-center mt-5 flex-col">
            <ContactView v-for="(item, index) in contacts" :key="index" :img="item.img" :status="item.status"
                :name="item.name" :content="store.getContent(item)" @click="store.setCurrentUser(item)" />
        </div>
    </div>
</template>
<style scoped></style>
