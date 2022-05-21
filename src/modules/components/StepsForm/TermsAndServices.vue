<script setup>
import { ref, watch } from "vue";

import { preventNumber } from "@/utils/helpers.js";

import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import Card from "primevue/card";

const email = ref();
const hasAgree = ref(false);

const isDisabled = ref(false);
const validationErrors = ref(true);

const validationInput = (target) => {
  if (target.id === "email") {
    validationErrors.value = !email.value;
  }
};

watch(email, () => {
  validationErrors.value = false;
});

const emit = defineEmits(["complete", "prev-page"]);

const finish = () => {
  emit("complete", {
    formData: {
      email: email.value,
      hasAgree: hasAgree.value,
    },
    pageIndex: 1,
  });
};

const prevPage = () => {
  emit("prev-page", { pageIndex: 1 });
};
</script>

<template>
  <div class="terms-service">
    <Card>
      <template #title> Terms and Services</template>
      <template #subtitle>
        Enter the email and agree with the Terms and service to find the gitHub
        user</template
      >
      <template #content>
        <div class="terms-service__input">
          <label for="email">Email*</label>
          <InputText
            id="email"
            v-model="email"
            :class="{
              'terms-service__input--invalid': validationErrors,
            }"
            @blur="validationInput($event.target)"
            @keydown="preventNumber($event)"
          ></InputText>
          <p v-if="validationErrors" class="terms-service__message--error">
            Email is required.
          </p>
        </div>
        <div class="terms-service__input checkbox">
          <Checkbox id="hasAgree" v-model="hasAgree" :binary="true" />
          <label for="hasAgree"
            >I've read and accept the terms & conditions
          </label>
        </div>

        <small>(*) Required</small>
      </template>
      <template #footer>
        <div class="terms-service__buttton">
          <Button
            label="Back"
            icon="pi pi-angle-left"
            class="back"
            @click="prevPage"
          ></Button>
          <Button
            label="Next"
            icon="pi pi-angle-right"
            icon-pos="right"
            :disabled="isDisabled"
            @click="finish"
          ></Button>
        </div>
      </template>
    </Card>
  </div>
</template>
<sytle lang="scss" scoped>
.terms-service {
  margin-bottom: $hda-space-l;

  @media screen and (min-width: $hda-tablet) {
    padding: 0 $hda-space-s;
    max-width: 700px;
    margin: auto;
  }

  .terms-service__input {
    display: flex;
    flex-direction: column;
    width: 100%;
    &.checkbox {
      flex-direction: row;
    }
    label {
      color: $hda-color-gray;
      margin: $hda-space-s 0 $hda-space 0;
    }

    input {
      &.terms-service__input--invalid {
        border-color: $hda-color-error;
      }
    }

    .terms-service__message--error {
      color: $hda-color-error;
      font-size: $hda-font-size-s;
    }
  }

  .terms-service__buttton {
    display: flex;
    justify-content: space-between;

    .back {
      background: $hda-color-gray-light;
      border-color: $hda-color-gray-light;

      &:hover {
        background: $hda-color-gray;
        border-color: $hda-color-gray;
      }
    }
  }

  small {
    display: inline-block;
    color: $hda-color-gray;
    margin-top: $hda-space-s;
  }
}
</sytle>
