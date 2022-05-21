<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Personal",
    to: "personal-information",
  },
  {
    label: "Terms and Services",
    to: "terms-and-services",
  },
]);
const formObject = ref({});

const nextPage = (event) => {
  for (let field in event.formData) {
    formObject.value[field] = event.formData[field];
  }

  router.push(items.value[event.pageIndex + 1].to);
};

const prevPage = (event) => {
  router.push(items.value[event.pageIndex - 1].to);
};
const complete = () => {
  console.log(formObject.value);
};
</script>
<template>
  <router-view
    v-slot="{ Component }"
    :form-data="formObject"
    @prev-page="prevPage($event)"
    @next-page="nextPage($event)"
    @complete="complete"
  >
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>
<sytle scoped lang="scss">
.steps {
  margin-bottom: $hda-space-xl;
}
</sytle>
