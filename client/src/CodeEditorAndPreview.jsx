import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react'; // If using Monaco
import './CodeEditorAndPreview.css'; // CSS file for styling
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import beautify from 'js-beautify';

const CodeEditorAndPreview = ({ element }) => {

    const location = useLocation();
    const { username } = location.state || {}; // Fallback to an empty object if state is undefined
    const { element_id } = location.state || {}; // Fallback to an empty object if state is undefined


    console.log("Element HTML : " + element);

    const [userElement, setUserElement] = useState([]);
    const [activeLanguage, setActiveLanguage] = useState('html');
    const [code, setCode] = useState('');
    const [cssCode, setCssCode] = useState('');

    const handleEditorlangChange = (value) => {
      if (activeLanguage === 'html') {
          setHtmlCode(value);
      } else {
          setCssCode(value);
      }
  };

  const toggleLanguage = () => {
      setActiveLanguage(activeLanguage === 'html' ? 'css' : 'html');
  };

    useEffect(() => {
      const fetchElements = async () => {
          try {
              const response = await axios.get(`http://localhost:3001/elements/by-id?_id=${element}`);
              if (response.data && response.data.length > 0) {
                  setUserElement(response.data[0]); // Ensure that the data is not empty
              } else {
                  console.error('No data returned for element:', element);
              }
          } catch (error) {
              console.error('Error fetching element:', element, error);
          }
      };
  
      if (element) { // Only fetch if element is not null or undefined
          fetchElements();
      }
  }, [element]);
    
    // Additionally, if you want to check the updated state, you can use another useEffect
    useEffect(() => {
        console.log('userElement state updated:', userElement);
        console.log('userElement.element_html updated:', userElement.element_html);
    }, [userElement]);

    

    useEffect(() => {
      if (userElement.element_html) {
        setCode(beautify.html(userElement.element_html, { indent_size: 2, space_in_empty_paren: true }));
        setCssCode(beautify.css(userElement.element_css, { indent_size: 2, space_in_empty_paren: true }));
        console.log("Code : " + code);
      }
    }, [userElement]); 
  
  // Function to handle code changes
  const handleEditorChange = (newValue) => {
    console.log('New Value:', newValue); // Check what's being inputted
    if (activeLanguage === 'html') {
        setHtmlCode(newValue);
    } else {
        setCssCode(newValue);
    }
};

const [editorValue, setEditorValue] = useState(code);
const [handleEditorValue, setHandleEditorValue] = useState('handleEditorChange');

useEffect(() => {
    setEditorValue(activeLanguage === 'html' ? code : cssCode);
}, [code, cssCode, activeLanguage]); // Respond to changes in code or active language

useEffect(() => {
  setHandleEditorValue(activeLanguage === 'html' ? 'handleEditorChange' : 'handleCssEditorChange');
}, [code, cssCode, activeLanguage]); // Respond to changes in code or active language


  const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body, html {
          background-color: ${userElement.element_background};
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Inter", sans-serif;
        }
        .Light_Dark_Container{
          display: none;
        }
        .E_title{
          position: absolute;
          top: 3px;
          left: 15px;
          color:gray;
          z-index: 2;
        }
        body:hover .Light_Dark_Container{
          display: block; /* Show the Light_Dark_Container on hover */
        }

        body {
          transition: background-color 0.3s ease; /* Smooth transition for background color */
        }

        

        .toggle {
          z-index: 1000;
          position: fixed;
          top: 0.4rem;
          right: 0.4rem;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          line-height: 1;
          color: #d9d9d9;
        }
        
        .input {
          display: none;
        }
        
        .icon {
          grid-column: 1 / 1;
          grid-row: 1 / 1;
          transition: transform 500ms;
        }
        
        .icon--moon {
          transition-delay: 200ms;
          color: #ffffff;
        }
        
        .icon--sun {
          transform: scale(0);
          color: #000000;
          
        }
        
        #switch:checked + .icon--moon {
          transform: rotate(360deg) scale(0);
        }
        
        #switch:checked ~ .icon--sun, body  {
          transition-delay: 200ms;
          transform: scale(1) rotate(360deg);
          
        }

        
        body.dark-mode {
          background-color: ${userElement.element_background2};
        }
        ${userElement.element_css}
      </style>
    </head>
    <body>
    
    <div class="Light_Dark_Container">
        <label class="toggle" for="switch">
            <input id="switch" class="input" type="checkbox">
            <div class="icon icon--moon">
                <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                </svg>
            </div>
        
            <div class="icon icon--sun">
                <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
            </div>
        </label>
        <!-- <p class="E_title" >${userElement.element_name}</p> -->
    </div>
       ${code} 
      <script>
      document.addEventListener('DOMContentLoaded', (event) => {
        const switchElement = document.getElementById('switch');
        switchElement.addEventListener('change', function() {
          if (this.checked) {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }
        });
  
        // Add click event listener to the iframe's document
        document.body.addEventListener('click', function(event) {
          // Check if the click target is the body itself, not a child element
          if (event.target === document.body) {
            console.log('Body clicked');
            // If you need to communicate with the parent document:
            window.parent.postMessage('element_id', 'http://localhost:5173'); // Replace '*' with your domain in production
          }
        });
      });
    </script>
    
    </body>
    </html>
  `;

  return (
    <div className="code-editor-and-preview">
      <button onClick={toggleLanguage}>
                Switch to {activeLanguage === 'html' ? 'CSS' : 'HTML'}
            </button>
            <div className="editor-container">
                <MonacoEditor
                    height="100%"
                    defaultLanguage={activeLanguage}
                    value={editorValue}
                    onChange={handleEditorChange}
                    options={{
                        tabSize: 4,
                        insertSpaces: true,
                        autoIndent: 'full',
                        detectIndentation: true,
                        renderWhitespace: 'all',
                    }}
                />
            </div>
      <div className="preview-container">
        <iframe
          title="Preview"
          srcDoc={fullHtml}
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
