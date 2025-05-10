
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ChatInterface from '../components/chat/ChatInterface';
import { Flower } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center min-h-[85vh]">
        <div className="w-full max-w-6xl mx-auto mb-10 text-center">
          {/* Hero Section positioned to allow background visibility */}
          <div className="hero-content flex flex-col items-center justify-center mb-8 pt-14">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold text-sm animate-bounce-soft border border-white/10">
              <div className="flex items-center gap-2">
                <Flower className="h-4 w-4 text-omni-primary" />
                <span>Your Personal AI Assistant</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-omni-accent glow-text">
              Meet OmniMind
            </h2>
            <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed mb-6 text-shadow">
              An advanced AI assistant that understands text, voice, and images.
              Ask anything, share your thoughts, or upload images for analysis.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <div className="flex items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10 hover:bg-black/60 transition-all duration-300">
                <div className="w-2 h-2 bg-omni-primary rounded-full mr-2"></div>
                <span className="text-sm text-white">Text Conversations</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10 hover:bg-black/60 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className="text-sm text-white">Voice Input</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10 hover:bg-black/60 transition-all duration-300">
                <div className="w-2 h-2 bg-omni-accent rounded-full mr-2"></div>
                <span className="text-sm text-white">Image Analysis</span>
              </div>
            </div>
          </div>
          
          {/* Chat Interface - Smaller and positioned near bottom */}
          <div className="chat-container-wrapper mt-auto">
            <Card className="max-w-2xl mx-auto backdrop-blur-md bg-black/30 border border-white/10 shadow-xl overflow-hidden rounded-2xl animate-fade-in transition-all duration-300">
              <ChatInterface />
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
