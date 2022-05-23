<script setup>
import { useRoute } from "vue-router";

import TheHeader from "@/common/components/TheHeader.vue";
import TheMain from "@/common/components/TheMain.vue";

const route = useRoute();
</script>

<template>
  <TheHeader>Some beautiful heard should be here!</TheHeader>
  <TheMain>
    <router-view v-slot="{ Component, route }">
      <transition name="route" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </TheMain>
</template>
<style>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.2s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
