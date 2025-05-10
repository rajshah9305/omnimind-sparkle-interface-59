
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ChatInterface from '../components/chat/ChatInterface';
import { Flower } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full mx-auto mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold text-sm animate-bounce-soft border border-white/10">
            <div className="flex items-center gap-2">
              <Flower className="h-4 w-4 text-omni-primary" />
              <span>Your Personal AI Assistant</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-omni-accent">
            Meet OmniMind
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed mb-6 text-shadow">
            An advanced AI assistant that understands text, voice, and images.
            Ask anything, share your thoughts, or upload images for analysis.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <div className="flex items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10">
              <div className="w-2 h-2 bg-omni-primary rounded-full mr-2"></div>
              <span className="text-sm text-white">Text Conversations</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span className="text-sm text-white">Voice Input</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10">
              <div className="w-2 h-2 bg-omni-accent rounded-full mr-2"></div>
              <span className="text-sm text-white">Image Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl">
          <ChatInterface />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
