
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { MessageSquare, BookOpen, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="max-w-4xl w-full mx-auto py-8 px-4">
        <div className="mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-omni-light text-omni-primary font-semibold text-sm animate-bounce-soft">
            Explore Our Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-omni-primary to-omni-secondary">
            Powerful AI Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            OmniMind combines cutting-edge AI technology with an intuitive interface to provide a powerful assistant for all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-omni-light flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-omni-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Text Conversations</h3>
            <p className="text-gray-600">
              Engage in natural, flowing conversations with OmniMind. Our AI understands context, remembers previous messages, and provides thoughtful responses.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Voice Interaction</h3>
            <p className="text-gray-600">
              Speak naturally with OmniMind using advanced voice recognition. Get voice responses that sound natural and human-like.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Image Analysis</h3>
            <p className="text-gray-600">
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
