<template>
  <div class="title">
    <div class="center">
      <button class="record-btn primary" @click="nextPage('voice')">voice Recorder</button>
    </div>
  </div>
  <div class="title">
    <div class="center">
      <button class="record-btn primary" @click="nextPage('speech')">speech</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const nextPage = (path) => {
      router.push(path);
    };

    return {
      nextPage,
    };
  },
};
</script>

<style scoped></style>
