import React from 'react';
function textToSpeech(x) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(x));
}

export default textToSpeech;
