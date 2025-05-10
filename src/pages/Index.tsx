
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ChatInterface from '../components/chat/ChatInterface';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold text-omni-dark mb-4">Your Personal AI Assistant</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OmniMind is an advanced AI assistant that understands text, voice, and images. 
            Ask anything, share your thoughts, or upload images for analysis.
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default Index;
