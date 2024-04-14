import React, { useState, useEffect } from 'react';
import CodeSnippetCarousel from './CodeSnippetCarousel';
import './SnippetGrid.css';

// Shuffle function inside the ContainerGrid.jsx file
function shuffleArray(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const ContainerCarousel = ({ snippets }) => {
  const [shuffledSnippets, setShuffledSnippets] = useState([]);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(snippets)) {
      setShuffledSnippets(shuffleArray(snippets));
    }
  }, [snippets]);

  const chunkSize = 5;
  const snippetChunks = [];
  for (let i = 0; i < shuffledSnippets.length; i += chunkSize) {
    snippetChunks.push(shuffledSnippets.slice(i, i + chunkSize));
  }

  const handlePrev = () => {
    setCurrentChunkIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : snippetChunks.length - 1
    );
  };

  const handleNext = () => {
    setCurrentChunkIndex((prevIndex) =>
      prevIndex < snippetChunks.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="grid-container">
      <div className='carousel-controls prev' onClick={handlePrev}><i className='fa fa-angle-left'></i></div>
      <div className='carousel-controls next' onClick={handleNext}><i className='fa fa-angle-right'></i></div>
      {snippetChunks.length > 0 && (
        <CodeSnippetCarousel
          key={currentChunkIndex}
          snippets={snippetChunks[currentChunkIndex]}
        />
      )}
    </div>
  );
};

export default ContainerCarousel;
