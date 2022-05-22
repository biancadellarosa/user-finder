<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserConfigurationStore } from "@/modules/store/userConfiguration";

const { getUsername, fetchUserProfile } = useUserConfigurationStore();

const router = useRouter();
const routes = useRoute();

const items = ref([
  {
    label: "Personal",
    to: "personal-information",
  },
  {
    label: "Terms and Services",
    to: "terms-and-services",
  },
  {
    label: "User Profile",
    to: `user-profile/${getUsername}`,
  },
]);

const nextPage = (event) => {
  router.push(items.value[event.pageIndex + 1].to);
};

const prevPage = (event) => {
  router.push(items.value[event.pageIndex - 1].to);
};

const complete = async (event) => {
  await fetchUserProfile();
  router.push(items.value[event.pageIndex + 1].to);
};
</script>
<template>
  <router-view
    v-slot="{ Component }"
    @prev-page="prevPage($event)"
    @next-page="nextPage($event)"
    @complete="complete"
  >
    <keep-alive>
      <component :is="Component" :key="routes.fullPath" />
    </keep-alive>
  </router-view>
</template>
<sytle scoped lang="scss">
.steps {
  margin-bottom: $hda-space-xl;
}
</sytle>
