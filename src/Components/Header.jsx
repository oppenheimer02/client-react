import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Header() {
  const [text, setText] = useState('');
  const fullText = "The place where you Find aalu";
  const typingSpeed = 150; // Adjust typing speed (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
        <h1>
          <span> {text} </span>
        </h1>
        <p className='details'>the symphony head leg foot</p>
        <a href='/' className='cv-btn'>
          Show more
        </a>
      </div>
    </div>
  );
}

export default Header;
