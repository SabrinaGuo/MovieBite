<template>
  <div>
    <h2>detail page</h2>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const route = useRoute();
console.log(route.params.id);
</script>
