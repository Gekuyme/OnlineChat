<script setup>
import { ref } from 'vue'
const status = ref("")
const statusMsg = ref("")
const props = defineProps({
    msg: String
})
const statusClass = [
    {
        class: "w-2 h-2 bg-blue-700 rounded-full",
        msg: ""
    },
    {
        class: "w-7 h-7 bg-blue-700 rounded-full text-white flex justify-center items-center text-xs",
        msg: "2"
    },
    {
        class: "",
        msg: "9:32"
    },
]

function CheckStatus(val) {
    switch (val) {
        case "checked":
            status.value = statusClass[0].class
            statusMsg.value = statusClass[0].msg
            break;
        case "notchecked":
            status.value = statusClass[1].class
            statusMsg.value = statusClass[1].msg
            break;
        case "reply":
            status.value = statusClass[2].class
            statusMsg.value = statusClass[2].msg
            break;
        default:
            break;
    }
}
CheckStatus(props.msg);
</script>
<template>
    <div :class="status">{{ statusMsg }}</div>
</template>
<style scoped></style>
