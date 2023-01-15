import { SpeechRecognition } from "@capacitor-community/speech-recognition";

/**
 * @description : 권한 존재 여부
 * @returns : Promise<{  permission: boolean;}>;
 */
const hasPermission = () => {
  return SpeechRecognition.hasPermission();
};

/**
 * @description : 마이크 권한 요청
 * @returns void
 */
const requestPermission = () => {
  SpeechRecognition.requestPermission();
};

/**
 * @description : speech SpeechRecognition start
 * @returns void
 */
const startRecord = () => {
  return SpeechRecognition.start({
    language: "en-US",
    maxResults: 2,
    prompt: "Say something",
    partialResults: true,
    popup: true,
  });
};

/**
 * @description : speech SpeechRecognition stop
 * @returns void
 */
const stopRecord = () => {
  return SpeechRecognition.stop();
};

export { hasPermission, requestPermission, startRecord, stopRecord };
