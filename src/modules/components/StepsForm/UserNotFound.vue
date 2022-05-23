<template>
  <div class="github-not-found">
    <h2>Sorry! No user was found.</h2>
    <router-link to="/find-user/personal-information">try again!</router-link>
  </div>
</template>

<sytle lang="scss" scoped>
.github-not-found {
  margin-bottom: $hda-space-l;
  text-align: center;
}
</sytle>
