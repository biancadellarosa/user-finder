<script setup>
import { ref } from "vue";

import Button from "primevue/button";

const firstName = ref();
//const lastName = ref();

const isDisabled = ref(false);

const emit = defineEmits(["next-page", "prev-page"]);

const nextPage = () => {
  emit("next-page", {
    formData: {
      email: firstName.value,
    },
    pageIndex: 1,
  });
};
const prevPage = () => {
  emit("prev-page", {
    pageIndex: 1,
  });
};
</script>

<template>
  <div>
    <Button
      label="Next"
      icon="pi pi-angle-right"
      icon-pos="right"
      :disabled="isDisabled"
      @click="nextPage"
    ></Button>
    <Button
      label="Prev"
      icon="pi pi-angle-left"
      :disabled="isDisabled"
      @click="prevPage"
    ></Button>
  </div>
</template>
<sytle scoped lang="scss"></sytle>
