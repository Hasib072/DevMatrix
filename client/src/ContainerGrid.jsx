// ContainerGrid.jsx
import React from 'react';
import CodeSnippet from './CodeSnippet';
import './SnippetGrid.css';

const ContainerGrid = ({ snippets }) => {
  return (
    <div className="grid-container">
      {snippets.map((snippet, index) => (
        <CodeSnippet
          key={index}
          title={snippet.title}
          htmlCode={snippet.htmlCode}
          cssCode={snippet.cssCode}
        />
      ))}
    </div>
  );
};

export default ContainerGrid;
