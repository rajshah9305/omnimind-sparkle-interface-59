
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ChatInterface from '../components/chat/ChatInterface';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full mx-auto mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-omni-light text-omni-primary font-semibold text-sm animate-bounce-soft">
            Your Personal AI Assistant
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-omni-primary to-omni-secondary">
            Meet OmniMind
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            An advanced AI assistant that understands text, voice, and images.
            Ask anything, share your thoughts, or upload images for analysis.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Text Conversations</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Voice Input</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Image Analysis</span>
            </div>
          </div>
        </div>
        
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default Index;
