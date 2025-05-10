
import React, { useState } from 'react';
import VoiceControl from './VoiceControl';
import { ImagePlus, SendHorizonal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onImageUpload?: (file: File) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onImageUpload }) => {
  const [message, setMessage] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleVoiceInput = (text: string) => {
    setMessage(prev => prev + ' ' + text);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onImageUpload) {
      onImageUpload(files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-container relative">
      <div className="flex items-center gap-2">
        <label htmlFor="image-upload" className="cursor-pointer">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="text-gray-500 hover:text-omni-primary transition-colors"
          >
            <ImagePlus size={20} />
            <span className="sr-only">Upload image</span>
          </Button>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <div className="relative flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={isVoiceActive ? "Listening..." : "Ask OmniMind anything..."}
            className="input-field"
            disabled={isVoiceActive}
          />
          <VoiceControl 
            onVoiceInput={handleVoiceInput}
            onStateChange={setIsVoiceActive}
          />
        </div>

        <Button 
          type="submit" 
          disabled={!message.trim()}
          className={`${!message.trim() ? 'opacity-50' : ''} bg-omni-primary hover:bg-omni-secondary text-white rounded-full p-2`}
        >
          <SendHorizonal size={20} />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
