<script setup>
const props = defineProps({
    currentName: String,
    currentStatus: String,
})
</script>
<template>
    <div class="w-full bg-slate-200 basis-1/12">
        <div class="flex flex-col mt-3 ml-10">
            <p class="text-lg">{{ props.currentName }}</p>
            <p class="text-sm">{{ props.currentStatus }}</p>
        </div>
    </div>
</template>
<style scoped></style>