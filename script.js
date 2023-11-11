if ('speechSynthesis' in window) {
    const speechSynthesis = window.speechSynthesis;
    const speakButton = document.getElementById('speak-button');
    const resetButton = document.getElementById('reset-button');
    const textToSpeak = document.getElementById('text-to-speak');

    // Function to speak the text
    speakButton.addEventListener('click', () => {
      // Create a new SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(textToSpeak.value);

      // Speak the text
      speechSynthesis.speak(utterance);
    });

    // Function to reset the operation
    resetButton.addEventListener('click', () => {
      // Stop any ongoing speech synthesis
      speechSynthesis.cancel();
      // Clear the text area
      textToSpeak.value = '';
    });
  } else {
    alert('Text-to-speech is not supported in your browser.');
  }
