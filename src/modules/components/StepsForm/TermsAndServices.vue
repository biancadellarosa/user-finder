<script setup>
import { ref, reactive, watch } from "vue";
import { storeToRefs } from "pinia";

import { useUserConfigurationStore } from "@/modules/store/userConfiguration";
import { validationInput } from "@/utils/helpers.js";

import InputText from "primevue/inputtext";
import InputSwitch from "primevue/inputswitch";
import Button from "primevue/button";
import Card from "primevue/card";

const store = useUserConfigurationStore();
const { email, hasAgree } = storeToRefs(store);

const isDisabled = ref(false);
const validationErrors = reactive({});

watch(email.value, () => {
  validationInput({ id: "email" }, validationErrors, email.value.value);
});

const emit = defineEmits(["complete", "prev-page"]);
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
            v-model="email.value"
            :class="{
              'terms-service__input--invalid': validationErrors.email,
            }"
          ></InputText>
          <p
            v-if="validationErrors.email"
            class="terms-service__message--error"
          >
            Email is required.
          </p>
        </div>
        <div class="terms-service__input swicth">
          <InputSwitch id="hasAgree" v-model="hasAgree" />
          <label>I've read and accept the terms & conditions </label>
        </div>

        <small>(*) Required</small>
      </template>
      <template #footer>
        <div class="terms-service__buttton">
          <Button
            label="Back"
            icon="pi pi-angle-left"
            class="p-button-text"
            @click="emit('prev-page', { pageIndex: 1 })"
          ></Button>
          <Button
            label="Find user"
            icon="pi pi-angle-right"
            icon-pos="right"
            :disabled="isDisabled"
            @click="
              emit('complete', {
                pageIndex: 1,
              })
            "
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
    margin-bottom: $hda-space-m;
    &.swicth {
      flex-direction: row;
      justify-content: start;
      align-items: center;
      text-align: center;

      label {
        margin: 0 $hda-space;
      }
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
  }
}
</sytle>
