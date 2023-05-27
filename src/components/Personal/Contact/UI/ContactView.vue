<script setup>
import UiStatus from '../../../Shared/Contacts/UiStatus.vue';
// import { ref } from 'vue'
const props = defineProps({
    img: String,
    status: String,
    name: String,
    content: String,
})
// const voice = ref(`<svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
//                     stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                     <path stroke="none" d="M0 0h24v24H0z" />
//                     <rect x="9" y="2" width="6" height="11" rx="3" />
//                     <path d="M5 10a7 7 0 0 0 14 0" />
//                     <line x1="8" y1="21" x2="16" y2="21" />
//                     <line x1="12" y1="17" x2="12" y2="21" />
//                 </svg>`)
// const typing = ref(`<svg class="h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
//             fill="none" stroke-linecap="round" stroke-linejoin="round">
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
//             <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
//         </svg>`)

// function icons() {
//     let result = undefined;
//     switch (props.status) {
//         case "checked":
//             console.log(voice.value)
//             result = voice.value
//             break;
//         case "notchecked":
//             result = typing.value
//             break;
//         case "reply":
//             result = "You: Say Somthing"
//             break;
//         default:
//             break;
//     }
//     console.log(result)
//     return result
// }
// const def = ref(icons())
</script>
<template>
    <div
        class="w-4/5 flex mt-5 mb-5 justify-around hover:bg-slate-100 p-4 rounded-lg cursor-pointer border-r-2 transition-all hover:border-blue-500 hover:scale-105 ">
        <div class="basis-1/5">
            <div class="w-16 h-16 overflow-hidden flex justify-center items-center">
                <img :src="props.img" class="rounded-full" alt="">
            </div>
        </div>
        <div class="basis-3/5 flex flex-col justify-around items-start ">
            <p class="text-sm">{{ props.name }}</p>
            <div class="flex gap-1 items-center">
                <p class="text-sm">{{ props.content }}</p>
            </div>
        </div>
        <div class="basis-1/8 flex flex-col justify-center items-center">
            <UiStatus :msg="props.status" :img="props.img" />
        </div>
    </div>
</template>
<style scoped></style>