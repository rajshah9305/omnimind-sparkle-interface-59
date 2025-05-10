
import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

interface VoiceControlProps {
  onVoiceInput?: (text: string) => void;
  onStateChange?: (isActive: boolean) => void;
}

const VoiceControl: React.FC<VoiceControlProps> = ({ onVoiceInput, onStateChange }) => {
  const [isListening, setIsListening] = useState(false);
  
  const toggleListening = () => {
    const newState = !isListening;
    setIsListening(newState);
    if (onStateChange) onStateChange(newState);
    
    // In a real implementation, this would start/stop speech recognition
    if (newState) {
      console.log('Started listening...');
      // Mock voice input after a delay (in a real app, this would use Web Speech API)
      setTimeout(() => {
        if (onVoiceInput) onVoiceInput('Voice input would appear here');
        setIsListening(false);
        if (onStateChange) onStateChange(false);
      }, 3000);
    } else {
      console.log('Stopped listening');
    }
  };

  return (
    <button
      className={`voice-button ${isListening ? 'voice-active' : ''}`}
      onClick={toggleListening}
      aria-label={isListening ? "Stop listening" : "Start listening"}
    >
      {isListening ? <Mic /> : <Mic />}
      
      {isListening && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 waveform">
          <div className="waveform-bar h-3 animate-wave-1"></div>
          <div className="waveform-bar h-5 animate-wave-2"></div>
          <div className="waveform-bar h-4 animate-wave-3"></div>
          <div className="waveform-bar h-6 animate-wave-4"></div>
          <div className="waveform-bar h-3 animate-wave-5"></div>
        </div>
      )}
    </button>
  );
};

export default VoiceControl;
