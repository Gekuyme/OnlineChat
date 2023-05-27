<script setup>
import { ref } from 'vue'
const props = defineProps({
    msg: Object
})
const msgMe = ref("w-1/3 h-12 bg-blue-400 mt-5 mb-5 rounded-md relative ml-auto flex justify-start items-center");
const msgNotMe = ref("w-1/3 h-12 bg-slate-200 shadow-xl mt-5 mb-5 rounded-md flex justify-start items-center");
const currentClass = ref("");

switch (props.msg.author) {
    case "me":
        currentClass.value = msgMe.value
        break;
    default:
        currentClass.value = msgNotMe.value
        break;
}

</script>
<template>
    <div :class="currentClass">
        <p>
            {{ msg.data.text }}
        </p>
    </div>
</template>
<style scoped>

</style>