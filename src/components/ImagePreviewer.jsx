import React, { useState } from "react";

function ImagePreviewer() {
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 py-10">
      <h1 className="text-3xl font-bold mb-6">Image Preview</h1>

      <label
        htmlFor="imageUpload"
        className="border rounded px-3 py-2 w-64 text-center border-dashed"
      >
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <p className="text-gray-600">
          {image ? "เลือกรูปอื่น" : "คลิกเพื่อเลือกรูปที่นี่"}
        </p>
      </label>

      {image && (
        <div className="mt-6 shadow-lg rounded-xl overflow-hidden border border-gray-200">
          <img
            src={image}
            alt="Preview"
            className="w-72 h-72 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ImagePreviewer;
