import React, { useState } from "react";

function QrCodeApp() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    setQrUrl(url);
  }

  function handleChange (e) {
    setText(e.target.value)
  }

  return (
    <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 pt-10">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="พิมพ์ข้อความหรือ URL..."
          value={text}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          สร้าง QR
        </button>
      </form>

      {qrUrl && (
        <div className="text-center">
          <img
            src={qrUrl}
            alt="Generated QR Code"
            className="mb-4"
          />
        </div>
      )}
    </div>
  );
}

export default QrCodeApp;
