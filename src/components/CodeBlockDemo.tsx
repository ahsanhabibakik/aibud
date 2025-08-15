"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}

export function CodeBlockTabsDemo() {
  const htmlCode = `<div class="p-4 border rounded-lg">
  <h2 class="text-xl font-bold mb-4">Fights Counter</h2>
  <p class="mb-2">Fight Club Fights Count: <span id="count">0</span></p>
  <button
    onclick="increment()"
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Increment
  </button>
</div>`;

  const cssCode = `.counter-container {
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
}

.counter-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.counter-button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.counter-button:hover {
  background-color: #2563eb;
}`;

  const jsCode = `let count = 0;

function increment() {
  count++;
  document.getElementById('count').textContent = count;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Counter initialized');
});`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="html"
        filename="Multi-tab Example"
        tabs={[
          {
            name: "HTML",
            code: htmlCode,
            language: "html",
            highlightLines: [2, 6]
          },
          {
            name: "CSS",
            code: cssCode,
            language: "css",
            highlightLines: [10, 15, 20]
          },
          {
            name: "JavaScript",
            code: jsCode,
            language: "javascript",
            highlightLines: [1, 3, 4]
          }
        ]}
      />
    </div>
  );
}
