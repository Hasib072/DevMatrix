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
          element_name={snippet.element_name}
          element_html={snippet.element_html}
          element_css={snippet.element_css}
        />
      ))}
    </div>
  );
};

export default ContainerGrid;