import { defineStore } from "pinia";
import axios from "axios";

export const useUserConfigurationStore = defineStore("userConfiguration", {
  state: () => {
    return {
      userProfile: {},
      personalInformation: {
        firstname: { title: "Firstname", regex: "", value: null },
        lastname: { title: "Lastname", value: null },
        username: { title: "Username", value: null },
      },
      hasAgree: false,
      email: { title: "Email", value: null },
      userNotFound: false,
    };
  },
  actions: {
    async fetchUserProfile() {
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
  },
});
