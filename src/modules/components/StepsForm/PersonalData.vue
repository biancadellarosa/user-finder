<script setup>
import { ref, reactive, watch } from "vue";
import { storeToRefs } from "pinia";

import { useUserConfigurationStore } from "@/modules/store/userConfiguration";
import { preventNumber, validationInput } from "@/utils/helpers.js";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";

const store = useUserConfigurationStore();
const { personalInformation } = storeToRefs(store);

const emit = defineEmits(["next-page"]);
const isDisabled = ref(true);

const validationErrors = reactive({});

watch(validationErrors, () => {
  const allInputsLength = Object.keys(personalInformation.value).length;
  if (Object.values(validationErrors).length < allInputsLength) {
    return;
  }
  isDisabled.value = !Object.values(validationErrors).every((v) => v === false);
});
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
              'personal__input--invalid': validationErrors[key],
            }"
            @blur="
              validationInput($event.target, validationErrors, field.value)
            "
            @keydown="preventNumber($event)"
          ></InputText>
          <p v-if="validationErrors[key]" class="personal__message--error">
            {{ field.title }} is required.
          </p>
        </div>

        <small>(*) Required</small>
      </template>
      <template #footer>
        <div class="personal__buttton">
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
    justify-content: end;
  }

  small {
    display: inline-block;
    color: $hda-color-gray;
    margin-top: $hda-space-s;
  }
}
</sytle>
