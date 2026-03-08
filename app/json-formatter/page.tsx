"use client";

import { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: any) {
      setError("Invalid JSON!");
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">JSON Formatter</h1>
      <textarea
        className="w-full h-40 p-2 border rounded mb-4"
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={formatJSON}
        >
          Format
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={copyToClipboard}
          disabled={!output}
        >
          Copy
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {output && (
        <pre className="bg-gray-100 p-4 rounded overflow-auto">{output}</pre>
      )}
    </div>
  );
}