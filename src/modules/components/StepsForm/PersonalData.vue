<script setup>
import { ref, reactive } from "vue";

import { preventNumber } from "@/utils/helpers.js";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";

const personalInformationInput = reactive({
  firstname: { title: "Firstname", value: "" },
  lastname: { title: "Lastname", value: "" },
  username: { title: "Username", value: "" },
});

const isDisabled = ref(false);
const validationErrors = reactive({});

const validationInput = (target) => {
  switch (target.id) {
    case "firstname":
      validationErrors.firstname = !personalInformationInput.firstname.value;
      return;

    case "lastname":
      validationErrors.lastname = !personalInformationInput.lastname.value;
      return;
    case "username":
      validationErrors.username = !personalInformationInput.username.value;
      return;
  }
};

const emit = defineEmits(["next-page"]);

const nextPage = () => {
  emit("next-page", {
    formData: {
      firstname: personalInformationInput.firstname.value,
      lastname: personalInformationInput.lastname.value,
      username: personalInformationInput.username.value,
    },
    pageIndex: 0,
  });
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
          v-for="(field, key) in personalInformationInput"
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
            @blur="validationInput($event.target)"
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
            @click="nextPage"
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
