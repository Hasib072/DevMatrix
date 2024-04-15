import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react'; // If using Monaco
import './CodeEditorAndPreview.css'; // CSS file for styling
import { useLocation } from 'react-router-dom';


const CodeEditorAndPreview = ({ element }) => {

    const location = useLocation();
    const { username } = location.state || {}; // Fallback to an empty object if state is undefined
    const { element_id } = location.state || {}; // Fallback to an empty object if state is undefined


    console.log("Element HTML : " + element);
    const [code, setCode] = useState(element);
  
  // Function to handle code changes
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="code-editor-and-preview">
      <div className="editor-container">
        <MonacoEditor
          height="100%"
          defaultLanguage="html"
          defaultValue={code}
          onChange={handleEditorChange}
        />
      </div>
      <div className="preview-container">
        <iframe
          title="Preview"
          srcDoc={code}
          frameBorder="0"
          sandbox="allow-scripts" // Add other 'allow' values as needed
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default CodeEditorAndPreview;
