<script setup>
  import PersonalMenu from '../components/Personal/Menu/ChatMenu.vue'
  // import PersonalContacts from '../components/Personal/Contact/ChatContacts.vue'
  // import PersonalContent from '../components/Personal/Content/ChatSettings.vue'
  import PersonalChat from '../components/Personal/Content/ChatMessanger.vue'
</script>
<template>
  <main class="flex">
    <PersonalMenu/>
    <!-- <PersonalContacts/> -->
    <!-- <PersonalContent/> -->
    <PersonalChat/>
  </main>
</template>
<style scoped></style>
