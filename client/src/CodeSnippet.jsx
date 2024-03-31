import React from 'react';
import './SnippetGrid.css';

const CodeSnippet = ({ element_html, element_css }) => {
  // Create a complete HTML document with centered body content
  const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ${element_css}
      </style>
    </head>
    <body>
      ${element_html}
    </body>
    </html>
  `;

  return (
    <div className="snippet-container">
      <iframe 
        element_name="Preview"
        srcDoc={fullHtml}
        style={{ width: '100%', height: '100%', border: 'none' }}
        sandbox="allow-scripts" // Sandbox for security reasons
      />
    </div>
  );
};

export default CodeSnippet;
