<template>
  <header class="header">
    <span class="item" @click="back">뒤로가기</span>
    <h1 class="item page-name">Vue cap App</h1>
    <span class="item"></span>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const back = () => {
      router.push("/");
    };

    return {
      back,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  padding-top: calc(constant(safe-area-inset-top) + 23px);
  padding-top: calc(env(safe-area-inset-top) + 23px);
  padding-left: 10px;
  padding-right: 10px;
}

.item {
  width: calc(100% / 3);
}

.page-name {
  display: inline-block;
  text-align: center;
}
</style>
