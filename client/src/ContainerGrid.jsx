// Shuffle function inside the ContainerGrid.jsx file
function shuffleArray(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// ContainerGrid component
import React, { useState, useEffect } from 'react';
import CodeSnippet from './CodeSnippet';
import './SnippetGrid.css';



const ContainerGrid = ({ snippets }) => {
const [shuffledSnippets, setShuffledSnippets] = useState([]);


useEffect(() => {
  setShuffledSnippets(shuffleArray(snippets));
}, [snippets]);

return (
  <div className="grid-container">
    {shuffledSnippets.map((snippet, index) => (
      <CodeSnippet
        key={index}
        element_id={snippet._id}
        element_username={snippet.user_name}
        element_name={snippet.element_name}
        element_html={snippet.element_html}
        element_css={snippet.element_css}
        element_background={snippet.background}
        element_background2={snippet.background2}
      />
    ))}
  </div>
);
};

export default ContainerGrid;
