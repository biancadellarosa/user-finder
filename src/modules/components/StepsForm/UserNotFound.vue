<template>
  <div class="github-user">Not found</div>
</template>
<sytle lang="scss" scoped>
.github-user {
  margin-bottom: $hda-space-l;

  @media screen and (min-width: $hda-tablet) {
    padding: 0 $hda-space-s;
    max-width: 700px;
    margin: auto;
  }

  .github-user__buttton {
    display: flex;
    justify-content: end;
  }
}
</sytle>
