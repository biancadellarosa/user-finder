<script setup>
import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import { useUserConfigurationStore } from "@/modules/store/userConfiguration";
import { preventNumber, validationInput } from "@/utils/helpers.js";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";

const router = useRouter();

const store = useUserConfigurationStore();
const { personalInformation } = storeToRefs(store);

// return true if all inputs are valid.
const allValid = computed(() => {
  return (
    personalInformation.value.firstname.valid &&
    personalInformation.value.lastname.valid &&
    personalInformation.value.username.valid
  );
});

// To not show the feedback error messange in the firts load.
const setAsProcessedData = (key) => {
  personalInformation.value[key].processedData = true;
};

const isDisabled = ref(!allValid.value);

watch([personalInformation.value], () => {
  validationInput(personalInformation.value);
  isDisabled.value = !allValid.value;
});

const emit = defineEmits(["next-page"]);
const backToHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="personal">
    <Card>
      <template #title> Personal Information </template>
      <template #subtitle>
        Enter the personal information of the user you want to find</template
      >
      <template #content>
        <div
          v-for="(field, key) in personalInformation"
          :key="field.title"
          class="personal__input"
        >
          <label for="field">*{{ field.title }}</label>
          <InputText
            :id="key"
            v-model="field.value"
            :class="{
              'personal__input--invalid': !field.valid && field.processedData,
            }"
            @blur="setAsProcessedData(key)"
            @keydown="preventNumber($event)"
          ></InputText>
          <p
            v-if="!field.valid && field.processedData"
            class="personal__message--error"
          >
            {{ field.title }} is required.
          </p>
        </div>

        <small>(*) Required</small>
      </template>
      <template #footer>
        <div class="personal__buttton">
          <Button
            label="Back"
            icon="pi pi-angle-left"
            class="p-button-text"
            @click="backToHome"
          ></Button>
          <Button
            label="Next"
            icon="pi pi-angle-right"
            icon-pos="right"
            :disabled="isDisabled"
            @click="
              emit('next-page', {
                pageIndex: 0,
              })
            "
          ></Button>
        </div>
      </template>
    </Card>
  </div>
</template>
<sytle scoped lang="scss">
.personal {
  margin-bottom: $hda-space-l;

  @media screen and (min-width: $hda-tablet) {
    padding: 0 $hda-space-s;
    max-width: 700px;
    margin: auto;
  }

  .personal__input {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      color: $hda-color-gray;
      margin: $hda-space-s 0 $hda-space 0;
    }

    input {
      &.personal__input--invalid {
        border-color: $hda-color-error;
      }
    }

    .personal__message--error {
      color: $hda-color-error;
      font-size: $hda-font-size-s;
    }
  }

  .personal__buttton {
    display: flex;
    justify-content: space-between;
  }

  small {
    display: inline-block;
    color: $hda-color-gray;
    margin-top: $hda-space-s;
  }
}
</sytle>
