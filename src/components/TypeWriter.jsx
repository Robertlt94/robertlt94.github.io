import React, { useEffect, useRef } from 'react';

const TypeWriter = () => {
    const welcome = "Hello, My name is Robert Thao. I am a ";
    const roles = ["Web Developer.", "Computer Science Student.", "IT Professional.", "Project Manager.", "Software Engineer."];
    const typeWriterRef = useRef(null); // useRef hook for referencing the h1 element

    // Function to simulate typing a string one character at a time
    const startTyping = async (string, append = false) => {
        // Reset textContent if not appending
        if (!append && typeWriterRef.current) {
            typeWriterRef.current.textContent = ""; 
        }

        for (let i = 0; i < string.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for typing effect
            if (typeWriterRef.current) {
                typeWriterRef.current.textContent += string[i]; // Append the current character
            }
        }
    };

    // Function to simulate backspacing
    const backspaceText = async (currentText, keepLength) => {
        while (currentText.length > keepLength) {
            await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for backspacing
            currentText = currentText.slice(0, -1); // Remove last character
            if (typeWriterRef.current) {
                typeWriterRef.current.textContent = currentText; // Update text
            }
        }
    };

    useEffect(() => {
        let isMounted = true; // To control if component is mounted

        const typeSequence = async () => {
            if (!typeWriterRef.current || !isMounted) return;

            // Step 1: Type the welcome message
            await startTyping(welcome);

            // Step 2: Loop through the roles
            for (let i = 0; i < roles.length; i++) {
                const role = roles[i];

                // Step 3: Type the role after the welcome message
                await startTyping(role, true); // Append the role after the welcome message

                // Step 4: Pause for 1 second before backspacing (unless it's the last role)
                if (i < roles.length - 1) {
                    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause for 1 second

                    // Step 5: Backspace the role but keep the welcome message intact
                    await backspaceText(typeWriterRef.current.textContent, welcome.length);
                }
            }
        };

        typeSequence(); // Start the typing sequence when component mounts

        return () => {
            isMounted = false; // Cleanup if component unmounts
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className='typewriter-container'>
            <h1>
                <span ref={typeWriterRef}></span>
                <span className="typewriter-caret">|</span>
            </h1>
        </div>
    );
};

export default TypeWriter;