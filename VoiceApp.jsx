import React from "react";

export default function VoiceApp() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Мой личный голос</h1>
      <audio controls>
        <source src="./AUDIO-2025-03-29-01-37-42.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
