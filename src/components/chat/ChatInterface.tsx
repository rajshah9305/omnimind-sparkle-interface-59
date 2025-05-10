
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { MessageType } from './ChatMessage';
import ChatInput from './ChatInput';
import LoadingIndicator from '../common/LoadingIndicator';
import { Settings, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SettingsPanel from '../settings/SettingsPanel';

interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm OmniMind, your AI assistant. How can I help you today?",
      type: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content),
        type: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleImageUpload = (file: File) => {
    // In a real app, you'd upload the image to a server or process it
    console.log('Image uploaded:', file.name);
    
    // For demo purposes, add a message acknowledging the upload
    const userMessage: Message = {
      id: Date.now().toString(),
      content: `[Image: ${file.name}]`,
      type: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response to the image
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I've received your image. In a complete implementation, I would analyze the image content and respond accordingly.",
        type: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  // Simple response generator for demo purposes
  const getAIResponse = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return "Hello there! How can I assist you today?";
    } else if (lowerMsg.includes('help')) {
      return "I'm here to help! You can ask me questions, request information, or just chat. What would you like to know?";
    } else if (lowerMsg.includes('thank')) {
      return "You're very welcome! Is there anything else I can help with?";
    } else if (lowerMsg.includes('weather')) {
      return "I don't have real-time weather data in this demo, but in a complete implementation, I could provide current weather forecasts for your location.";
    } else if (lowerMsg.includes('name')) {
      return "I'm OmniMind, your friendly AI assistant. I'm designed to be helpful, engaging, and informative!";
    } else {
      return "That's an interesting point! In a full implementation, I'd provide a more detailed and contextual response based on our conversation history and my knowledge base.";
    }
  };

  return (
    <div className="chat-container relative">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <h2 className="font-medium">OmniMind Assistant</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-omni-primary"
            onClick={() => console.log('Voice output toggled')}
          >
            <Volume2 size={18} />
            <span className="sr-only">Toggle voice</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-omni-primary"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Settings size={18} />
            <span className="sr-only">Settings</span>
          </Button>
        </div>

        {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
      </div>

      {/* Messages Area */}
      <div className="chat-messages scrollbar-hide">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            content={msg.content}
            type={msg.type}
            timestamp={msg.timestamp}
          />
        ))}
        
        {isLoading && (
          <ChatMessage
            content=""
            type="ai"
            isLoading={true}
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} onImageUpload={handleImageUpload} />
    </div>
  );
};

export default ChatInterface;
