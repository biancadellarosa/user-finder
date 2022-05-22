<script setup>
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();

const start = () => {
  router.push("/find-user/personal-information");
};
</script>

<template>
  <section class="home">
    <div>
      <h1>Finder user from GitHub</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem
        arcu, pulvinar id interdum quis, vulputate a ipsum. Duis quis
        consectetur magna. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nunc rhoncus sed nunc vel finibus. Mauris condimentum vehicula
        pellentesque
      </p>
    </div>

    <Button label="Start" icon="pi pi-angle-right" @click="start" />
  </section>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: $hda-tablet) {
    padding: 0 $hda-space-s;
    max-width: 700px;
    margin: auto;
  }

  p {
    margin-bottom: $hda-space-l;
  }

  button {
    width: 100%;
    align-self: flex-end;
    @media screen and (min-width: $hda-tablet) {
      width: auto;
    }
  }
}
</style>
