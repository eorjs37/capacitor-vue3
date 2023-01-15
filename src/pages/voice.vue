<template>
  <div class="title center">
    <button class="record-btn primary" @click="funcRecord">{{ RECORD_TYPE === 1 ? "녹음하기" : "녹음중지" }}</button>
  </div>
  <div class="title center" v-if="base64Data">
    <button class="record-btn primary media-btn" @click="playRecord">녹음듣기</button>
  </div>
</template>

<script>
import { voiceHasRecordPermission, voiceRequestPermission, startVoiceRecord, stopVoiceRecord } from "@/utils/voiceRecorder";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup() {
    const mimeType = ref(null);
    const base64Data = ref(null);
    const RECORD_TYPE = ref(1);

    const isPermission = () => {
      voiceHasRecordPermission()
        .then((result) => {
          const { value } = result;
          if (!value) {
            voiceRequestPermission().catch((err) => {
              console.error("error : ", err);
            });
          }
        })
        .catch((err) => {
          console.error("error : ", err);
        });
    };

    const voiceStartRecord = () => {
      startVoiceRecord()
        .then((result) => {
          const { value } = result;
          if (!value) {
            alert(`녹음시작 실패`);
          }
        })
        .catch((error) => console.error(error));
    };

    const voiceStopRecord = () => {
      stopVoiceRecord()
        .then((result) => {
          const { mimeType: type, recordDataBase64 } = result.value;
          mimeType.value = type;
          base64Data.value = recordDataBase64;
        })
        .catch((error) => console.log(error));
    };

    const funcRecord = () => {
      if (RECORD_TYPE.value === 1) {
        RECORD_TYPE.value = 2;
        voiceStartRecord();
      } else {
        RECORD_TYPE.value = 1;
        voiceStopRecord();
      }
    };

    const playRecord = () => {
      const audio = new Audio(`data:${mimeType.value};base64, ${base64Data.value}`);
      audio.play();
    };
    onMounted(() => {
      isPermission();
    });

    return {
      mimeType,
      base64Data,
      RECORD_TYPE,
      funcRecord,
      playRecord,
    };
  },
};
</script>

<style>
.media-btn {
  margin-top: 10px;
}
</style>
