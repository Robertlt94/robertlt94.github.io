import React, { useEffect, useRef } from 'react';

const TypeWriter = () => {
  const welcome = "Hello, My name is Robert Thao. I am a ";
  const roles = ["Web Developer", "Computer Science Student", "IT Professional", "Project Manager", "Software Engineer"];
  const typeWriterRef = useRef(null); // useRef hook for referencing the h1 element
  let isTyping = useRef(false); // Flag to track typing process

  // Function to simulate typing of a string
  const startTyping = async (string, append = false) => {
    // Clear content if not appending
    if (!append && typeWriterRef.current) {
      typeWriterRef.current.textContent = ''; 
    }

    // Type one character at a time
    for (let i = 0; i < string.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Delay
      if (typeWriterRef.current) {
        typeWriterRef.current.textContent += string[i]; // Append the current character
      }
    }
  };

  // Function to simulate backspacing
  const backspaceText = async (currentText, keepLength) => {
    while (currentText.length > keepLength) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Delay
      currentText = currentText.slice(0, -1); // Remove the last character
      if (typeWriterRef.current) {
        typeWriterRef.current.textContent = currentText; // Update the text in the DOM
      }
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to prevent updating unmounted component

    const typeSequence = async () => {
      if (!typeWriterRef.current || isTyping.current) return;

      isTyping.current = true; // Set typing flag

      // Step 1: Type the welcome message
      await startTyping(welcome); 

      // Step 2: Iterate through the roles
      for (let i = 0; i < roles.length; i++) {
        if (!isMounted) break; // Stop if component is unmounted

        const role = roles[i];
        await startTyping(role, true); // true to append the role after the welcome text

        // Step 3: Pause for 1 second before backspacing, except for the last role
        if (i < roles.length - 1) { // Only backspace if it's not the last role
          await new Promise(resolve => setTimeout(resolve, 1000)); // Pause for 1 second
          await backspaceText(typeWriterRef.current.textContent, welcome.length); // Backspace role only
        }
      }

      isTyping.current = false; // Reset typing flag
    };

    typeSequence(); // Start the typing sequence when component mounts

    return () => {
      isMounted = false; // Cleanup: set mounted flag to false when unmounting
      if (typeWriterRef.current) {
        typeWriterRef.current.textContent = ''; // Clear text content when unmounting
      }
    };
  }, []); // Empty dependency array: runs once after mount

  return (
    <div className="typewriter-container">
      <h1>
        <span ref={typeWriterRef}></span>
        <span className="typewriter-caret">|</span>
      </h1>
    </div>
  );
};

export default TypeWriter;