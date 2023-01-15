import { VoiceRecorder } from "capacitor-voice-recorder";

const voiceHasRecordPermission = () => {
  return VoiceRecorder.hasAudioRecordingPermission();
};

const voiceRequestPermission = () => {
  return VoiceRecorder.requestAudioRecordingPermission();
};

const startVoiceRecord = () => {
  return VoiceRecorder.startRecording();
};

const stopVoiceRecord = () => {
  return VoiceRecorder.stopRecording();
};

export { voiceHasRecordPermission, voiceRequestPermission, startVoiceRecord, stopVoiceRecord };
