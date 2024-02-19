
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";


/* global chrome */


const App = () => {
  const handleArchiveRedirect = () => {
    // Query the current active tab to get its URL
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const currentTabUrl = tabs[0].url; // Gets the URL of the current tab
      chrome.runtime.sendMessage({ action: "redirectAndClick", url: currentTabUrl }, (response) => {
        console.log('Redirect initiated by background.', response);
      });
    });
  };

  return (
    <div className="popup-container flex flex-col justify-center items-center p-4 bg-slate-100">
      
      {/* Card container with shadow and border-radius */}
      <div className="card bg-white py-8 px-4 rounded-lg shadow-lg flex flex-col items-center">
        {/* Button */}
        <button 
          onClick={handleArchiveRedirect}
          className="archive-button hover:shadow-blue-glow" // Use class for styling
        > 
          <img src="/icon.png" alt="Logo" /> 
        </button>
        <div className="text-center mt-4 pt-4">
          Hi, I'm Sercan. I'm an Indie Maker who builds useful stuff. To stay tuned for my future projects, follow me on          <a href="https://twitter.com/SercanCap" target="_blank" rel="noopener noreferrer" >
            <FaXTwitter className="inline mb-1"style={{ fontSize: '1.5rem' }} />
          
          </a>
        </div>
      </div>
    </div>
  );
}



export default App;