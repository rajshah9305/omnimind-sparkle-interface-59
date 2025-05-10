
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { MessageSquare, BookOpen, Image, Rose } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="max-w-4xl w-full mx-auto py-8 px-4">
        <div className="mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold text-sm animate-bounce-soft border border-white/10">
            <div className="flex items-center gap-2">
              <Rose className="h-4 w-4 text-omni-primary" />
              <span>Explore Our Features</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-omni-accent">
            Powerful AI Capabilities
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            OmniMind combines cutting-edge AI technology with an intuitive interface to provide a powerful assistant for all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/10">
            <div className="w-12 h-12 rounded-full bg-omni-primary/20 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Text Conversations</h3>
            <p className="text-gray-200">
              Engage in natural, flowing conversations with OmniMind. Our AI understands context, remembers previous messages, and provides thoughtful responses.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Voice Interaction</h3>
            <p className="text-gray-200">
              Speak naturally with OmniMind using advanced voice recognition. Get voice responses that sound natural and human-like.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-white/10">
            <div className="w-12 h-12 rounded-full bg-omni-accent/20 flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Image Analysis</h3>
            <p className="text-gray-200">
              Upload images for OmniMind to analyze and describe. Get detailed information about any picture with our powerful visual recognition capabilities.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => navigate('/')} 
            className="bg-gradient-to-r from-omni-primary to-omni-secondary hover:opacity-90 transition-opacity px-8 py-6 h-auto text-lg"
          >
            Try OmniMind Now
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Features;
