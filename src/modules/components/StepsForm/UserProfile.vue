<script setup>
import { useRouter } from "vue-router";
import { useUserConfigurationStore } from "@/modules/store/userConfiguration";

import Button from "primevue/button";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import UserNotFound from "./UserNotFound.vue";

import { computed } from "vue";

const router = useRouter();
const store = useUserConfigurationStore();
const { getUserProfile, userNotFound, resetData } = store;

const location = computed(() => {
  return getUserProfile.location || "not set";
});
const name = computed(() => {
  return getUserProfile.name || getUserProfile.login;
});
const followers = computed(() => {
  return getUserProfile.followers;
});
const following = computed(() => {
  return getUserProfile.following;
});
const publicRepos = computed(() => {
  return getUserProfile.public_repos;
});
const bio = computed(() => {
  return getUserProfile.bio || null;
});

const startAgain = () => {
  // clean up data from store
  resetData();
  router.push("/");
};
</script>

<template>
  <div v-if="userNotFound">
    <UserNotFound />
  </div>
  <div v-else class="github-user">
    <div class="github-user__card">
      <Card>
        <template #title>
          <div class="github-user__title">
            <Avatar
              :image="getUserProfile.avatar_url"
              shape="circle"
              size="xlarge"
            />
            <div>
              <h3>
                {{ name }}
              </h3>
              <p>
                <i class="pi pi-map-marker"></i> Location:
                <span>{{ location }}</span>
              </p>
            </div>
            <hr />
          </div>
        </template>
        <template #content>
          <div class="github-user__follow">
            <div>
              <span>{{ followers }}</span>
              <p>Followers</p>
            </div>
            <div>
              <span>{{ following }}</span>
              <p>Following</p>
            </div>
            <div>
              <span>{{ publicRepos }}</span>
              <p>Repositories</p>
            </div>
          </div>
          <div v-if="bio">{{ bio }}</div>
        </template>
      </Card>
    </div>
    <div class="github-user__buttton">
      <Button
        label="Start again"
        icon="pi pi-replay"
        icon-pos="right"
        class="back"
        @click="startAgain"
      ></Button>
    </div>
  </div>
</template>
<sytle lang="scss" scoped>
.github-user {
  margin-bottom: $hda-space-l;

  span {
    font-weight: $hda-weight-semi;
  }

  @media screen and (min-width: $hda-tablet) {
    padding: 0 $hda-space-s;
    max-width: 700px;
    margin: auto;
  }
  .github-user__title {
    text-align: center;

    h3 {
      margin: 0 0 $hda-space;
    }
    hr {
      border-color: #73737314;
    }
  }

  .github-user__follow {
    display: flex;
    justify-content: center;
    gap: $hda-space-xl;

    div {
      text-align: center;
    }
  }

  .github-user__buttton {
    display: flex;
    justify-content: end;
    margin-top: $hda-space-s;
  }
}
</sytle>
