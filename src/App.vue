<script setup>
import { useRoute } from "vue-router";

import TheHeader from "@/common/components/TheHeader.vue";
import TheMain from "@/common/components/TheMain.vue";

const route = useRoute();
console.log(route);
</script>

<template>
  <TheHeader>HEADER</TheHeader>
  <TheMain>
    <router-view :key="route.fullPath"></router-view>
  </TheMain>
</template>
