import React, { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await axios.post('/generate', {
          prompt,
        });
        setGeneratedImage(response.data.imageUrl);
      } catch (error) {
        console.error("Error generating image:", error);
      } finally {
        setLoading(false);
      }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">AI Image Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your image description..."
            rows="4"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </form>
      {generatedImage && (
        <div className="mt-4">
          <img
            src={generatedImage}
            alt="Generated"
            className="max-w-full rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
