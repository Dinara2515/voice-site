import React, { useState } from "react";

function VoiceApp() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleTextChange = (e) => setText(e.target.value);

  const handleGenerateAudio = async () => {
    if (!text.trim()) return alert("Введите текст для озвучки!");
    try {
      const response = await fetch("https://api.example.com/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setAudioUrl(data.audioUrl);
    } catch (error) {
      console.error("Ошибка генерации аудио:", error);
      alert("Не удалось создать аудио.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", textAlign: "center" }}>
      <h1>🎙️ Генератор Голоса</h1>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={handleTextChange}
        placeholder="Введите текст..."
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleGenerateAudio}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        🎧 Озвучить
      </button>
      {audioUrl && (
        <div style={{ marginTop: "20px" }}>
          <h2>Ваш аудио файл:</h2>
          <audio controls src={audioUrl}></audio>
          <br />
          <a href={audioUrl} download="voice.mp3">
            ⬇️ Скачать
          </a>
        </div>
      )}
    </div>
  );
}

export default VoiceApp;
