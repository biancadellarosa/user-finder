import { defineStore } from "pinia";
import axios from "axios";

export const useUserConfigurationStore = defineStore("userConfiguration", {
  state: () => {
    return {
      userProfile: {},
      personalInformation: {
        firstname: {
          title: "Firstname",
          value: null,
          valid: false,
          processedData: false,
        },
        lastname: {
          title: "Lastname",
          value: null,
          valid: false,
          processedData: false,
        },
        username: {
          title: "Username",
          value: null,
          valid: false,
          processedData: false,
        },
      },
      hasAgree: false,
      email: { title: "Email", value: null, valid: false },
      userNotFound: false,
    };
  },
  actions: {
    async fetchUserProfile() {
      this.userNotFound = this.userNotFound && false;
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${this.personalInformation.username.value}`
        );
        this.userProfile = data;
      } catch (error) {
        console.log(error);
        this.userNotFound = true;
      }
    },
  },
  getters: {
    getUserProfile: (state) => state.userProfile,
    getUsername: (state) => state.personalInformation.username.value,
    getIsValidEmail: (state) => state.email.valid,
  },
});
