<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Steps from "primevue/steps";

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
  console.log(event);
  for (let field in event.formData) {
    formObject.value[field] = event.formData[field];
  }

  router.push(items.value[event.pageIndex + 1].to);
};

const prevPage = (event) => {
  router.push(items.value[event.pageIndex - 1].to);
};
const complete = () => {
  console.log("fecth data");
};
</script>
<template>
  <div>
    <div class="steps">
      <Steps :model="items" :readonly="true" />
    </div>

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
  </div>
</template>
<sytle scoped lang="scss">
.steps {
  margin-bottom: $hda-space-xl;
}
</sytle>
