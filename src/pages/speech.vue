<template>
  <div class="title center">
    <button class="record-btn primary" @click="funcClickSpeech">{{ RECORD_TYPE === 1 ? "스피치 시작" : "스피치 종료" }}</button>
  </div>
</template>

<script>
import { hasPermission, requestPermission, startRecord, stopRecord, returnSpeech } from "@/utils/speechReco";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup() {
    const base64Data = ref(null);
    const mimeType = ref(null);
    const RECORD_TYPE = ref(1);
    const authMicro = async () => {
      try {
        const { permission } = await hasPermission();
        if (!permission) {
          requestPermission();
        }
      } catch (error) {
        console.error("hasPermission : ", error);
      }
    };

    const funcClickSpeech = () => {
      if (RECORD_TYPE.value === 1) {
        funcStartSpeech();
      } else {
        RECORD_TYPE.value = 2;
        funcStopSpeeech();
      }
    };

    const funcStartSpeech = () => {
      startRecord()
        .then(() => {
          eventListener();
          setTimeout(() => {
            funcStopSpeeech();
          }, 5000);
        })
        .catch((error) => {
          console.error("error : ", error);
        });
    };

    const funcStopSpeeech = () => {
      stopRecord()
        .then()
        .catch((error) => {
          console.error("error : ", error);
        });
    };

    const eventListener = () => {
      returnSpeech.addListener("partialResults", (data) => {
        console.log(data);
      });
    };

    onMounted(() => {
      authMicro();
    });

    return {
      RECORD_TYPE,
      base64Data,
      mimeType,
      funcClickSpeech,
    };
  },
};
</script>

<style scoped></style>
